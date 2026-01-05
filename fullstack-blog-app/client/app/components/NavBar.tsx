'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axiosInstance from '../configs/axiosInstance';
import clsx from 'clsx';

type tabTypes = 'home' | 'users' | 'new-post';

export default function NavBar() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<tabTypes>('home');

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
      className="my-container flex flex-row justify-between my-8"
    >
      {!isLoading ? (
        <>
          <div className='flex flex-row gap-8'>
            <Link href='/' 
              // className={`my-link ${activeTab === 'home' && 'font-bold'}`}
              className={clsx('my-link', activeTab === 'home' && 'font-bold')}
              onClick={() => setActiveTab('home')}>
                Home
            </Link>
            <Link href='/users' 
              // className={`my-link ${activeTab === 'users' && 'font-bold'}`} 
              className={clsx('my-link', { 'font-bold': activeTab === 'users' })}
              onClick={() => setActiveTab('users')}>
                Users
            </Link>
            {loggedInUser && <Link href='/new-post' className='my-link'>New post</Link>}
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
