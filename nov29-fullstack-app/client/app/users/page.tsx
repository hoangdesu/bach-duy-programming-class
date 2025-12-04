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
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3001/users', {
      credentials: 'include', // Include cookies in the request
    })
      .then(res => {
        console.log('res:', res);
        
        if (res.status === 200) {
          setIsAuthorized(true);
          return res.json();
        }

        if (res.status === 401) return new Error('Unauthorized!')
      })
      .then((data) => {

        setUsers(data);
      })
      // TODO: improve error handling
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

      {isAuthorized && !hasError && (
         <ol>
          {users.map((usr) => (
            <li key={usr.username}>{usr.username}</li>
          ))}
        </ol>
      )}

      {!isAuthorized && (
        <p>You must be <Link href='/login'>logged in</Link> to view all users</p>
      )}
      
      {hasError && <p>Error. Something went wrong...</p>}
      
      {/* {!hasError ? (
        <ol>
          {users.map((usr) => (
            <li key={usr.username}>{usr.username}</li>
          ))}
        </ol>
      ) : (
        <div>
          <p>
            Error. Something went wrong...
          </p>
        </div>
      )} */}
      
    </div>
  );
}
