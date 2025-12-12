'use client'

import { use, useEffect, useState } from 'react';

 
export default function UserPage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = use(params);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/users/${username}/posts/`, {
      credentials: 'include', // Include cookies in the request
    })
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
  }, []);
 
  return (
    <div>
      <p>User: {username}</p>

      <h1>My posts</h1>
      ...

      <h1>Liked posts</h1>
      ...

    </div>
  )
}