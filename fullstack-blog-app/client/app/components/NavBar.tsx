'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axiosInstance from '../configs/axiosInstance';

export default function NavBar() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch('http://localhost:3001/auth', {
    //   credentials: 'include', // Include cookies in the request
    // })
    //   .then((res) => {
    //     console.log('nav res:', res);
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log('nav data:', data);
    //     setLoggedInUser(data);
    //   });

    (async () => {
      try {
        const { data: user } = await axiosInstance.get('/auth');
        setTimeout(() => {
          setLoggedInUser(user);
          setIsLoading(false);
          
        }, 1000);
      } catch (err) {}
    })();
  }, [pathname]);

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {!isLoading ? (
        <>
          <div>
            <Link href='/'>Home</Link>
            <Link href='/users'>Users</Link>
            {loggedInUser && <Link href='/new-post'>New post</Link>}
          </div>

          {loggedInUser ? (
            <div>
              {loggedInUser}
              <Link href='http://localhost:3001/logout'>Logout</Link>
            </div>
          ) : (
            <div>
              <Link href='/login'>Login</Link>
              <Link href='/signup'>Sign up</Link>
            </div>
          )}
        </>
      ) : (
        <>Loading...</>
      )}
    </nav>
  );
}

// app.post('server/logout', {
//   username,
//   cookies
// })
