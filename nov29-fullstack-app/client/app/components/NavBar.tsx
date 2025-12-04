'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/auth', {
      credentials: 'include', // Include cookies in the request
    })
      .then((res) => {
        console.log('nav res:', res);
        return res.json();
      })
      .then((data) => {
        console.log('nav data:', data);
        setLoggedInUser(data);
      });
  }, [loggedInUser]);

  return (
    <nav style={{ display: 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between' }}>
      <div>
        <Link href='/'>Home</Link>
        <Link href='/users'>Users</Link>
      </div>

      {loggedInUser ? (
        <div>
          {loggedInUser}
        </div>
      ) : (
        <div>
          <Link href='/login'>Login</Link>
          <Link href='/signup'>Sign up</Link>
        </div>
      )}
    </nav>
  );
}
