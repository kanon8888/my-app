"use client";

import Link from "next/link";
import LoginFrom from "./auth/LoginFrom";
import { signOut, useSession } from "next-auth/react";

const AuthButtons = () => {
    const session = useSession();
    return (
        <div>
            <div className="flex justify-center items-center gap-5">
                {session.status === "authenticated" ? (
                    <button className="btn" onClick={() => signOut()}>
                        Logout
                    </button>
                ) : (
                    <>
                        <LoginFrom />
                        <Link href="/register" className="btn">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthButtons;