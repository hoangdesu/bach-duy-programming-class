'use client';

import { useEffect, useState } from "react";

type User = {
    username: string;
    password: string;
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([] as User[]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ol>
                {users.map(usr => (
                    <li key={usr.username}>{usr.username}</li>
                ))}
            </ol>
        </div>
    )
}