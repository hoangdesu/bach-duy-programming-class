// import Image from "next/image";
'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formData = new FormData(form);
    
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    fetch('http://localhost:3001/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies in the request
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        console.log('res:', res);
        if (res.ok) {
          router.refresh(); // Refresh the router to update server components
          router.push('/'); // Use router.push() for client-side navigation
        } else {
          console.log('Login failed:', res.statusText);
        }
      })
      .catch((err) => {
        console.log('Login failed:', err);
      });
  };

  //  action='' method='POST'

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor='uname'>Username: </label>
          <input type='text' id='uname' name='username' />
        </div>
        <div>
          <label htmlFor='pwd'>Password: </label>
          <input type='password' id='pwd' name='password' />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
