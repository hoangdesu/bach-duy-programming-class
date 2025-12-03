'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type User = {
  username: string;
  password: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3001/users', {
      credentials: 'include', // Include cookies in the request
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }, []);

//   if (hasError) {
    
//     return  <div>
//           <p>
//             Error fetching users. You must be <a href='/login'>logged in</a>
//           </p>
//         </div>
//   }

  return (
    <div>
      <h1>Users</h1>
      {!hasError ? (
        <ol>
          {users.map((usr) => (
            <li key={usr.username}>{usr.username}</li>
          ))}
        </ol>
      ) : (
        <div>
          <p>
            You must be <Link href='/login'>logged in</Link> to view all users
          </p>
        </div>
      )}
    </div>
  );
}
