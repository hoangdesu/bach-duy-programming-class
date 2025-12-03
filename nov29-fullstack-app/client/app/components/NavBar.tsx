'use client';

import Link from "next/link"
import { useEffect } from "react";

export default function NavBar() {

    useEffect(() => {
        
    }, []);

    return (
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/login'>Login</Link>
          <Link href='/signup'>Sign up</Link>
          <Link href='/users'>Users</Link>
        </nav>
    )
}
