

import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth"


const userList = [
    { username: "hablu", password: "1234" },
    { username: "bablu", password: "6475" },
    { username: "dablu", password: "8364" },
];

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

