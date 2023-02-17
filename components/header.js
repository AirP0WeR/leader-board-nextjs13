'use client'

import { useSession, signIn, signOut } from "next-auth/react";


export default function Header() {
    const { data: session } = useSession();
    if (session) {
    return (
        <div>Header login</div>
    )
} else return (
        <div>Header Not login</div>
    )
}