import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { dbConnect } from "@/lib/dbConnect";
import { Anybody } from "next/font/google";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";



export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // Sing in with {name} button
            name: 'Email & Password',

            // form inputs
            credentials: {
                email: { label: "email", type: "email", placeholder: "Enter email" },
                password: { label: "Password", type: "password", placeholder: "Enter password" },

            },
            async authorize(credentials, req) {
                const { email, password, } = credentials;

                //find user
                // const user = userList.find((u) => u.username == username);
                const user = await dbConnect("users").findOne({ email })
                //if !user => err
                if (!user) return null;

                const isPasswordOk = await bcrypt.compare(password, user.password);

                if (isPasswordOk) {
                    return user;
                }
                // my Own login logic

                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // ...add more providers here
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            try {
                const payload = {
                    ...user,
                    provider: account.provider,
                    providerId: account.providerAccountId, role: "user",
                    createdAt: new Date().toISOString(),
                };

                if (!user?.email) {
                    return false;
                };

                const isExist = await dbConnect("users").findOne({ email: user.email, providerId: account.providerAccountId, });
                if (!isExist) {
                    const result = await dbConnect("users").insertOne(payload);
                }
                return true;
            } catch (error) {
                return false
            }


        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, token, user }) {
            if (token) {
                session.role = token.role;
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.email = user.email
                token.role = user.role
            }
            return token
        }
    }
};