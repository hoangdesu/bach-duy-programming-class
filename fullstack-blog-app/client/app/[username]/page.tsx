'use client'

import { use, useEffect, useState } from 'react';
import UserPost from './UserPost';
import axios from '../configs/axiosInstance';
 
export default function UserPage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = use(params);

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // data: success | loading | error

  useEffect(() => {
    // fetch(`http://localhost:3001/users/${username}/posts/`, {
    //   credentials: 'include', // Include cookies in the request
    // })
    //   .then((res) => res.json())
    //   .then((posts) => {
    //     console.log(posts);
    //     setPosts(posts);
    //   });

    (async () => {
      setIsLoading(true);

      try {
        const { data: posts } = await axios.get(`users/${username}/posts/`);
        setPosts(posts);
        setIsLoading(false);
        setIsError(false);
        
      } catch (err) {
        // ...
        setPosts([]);
        setIsError(true);
        setIsLoading(false);
      }

    })();


  }, []);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, [posts])

  // GET /posts?username=username {username}
  // GET /posts/user/:username
  // GET /posts_by_user/:username
 
  return (
    <div>
      <p>User: {username}</p>

      <h1>My posts</h1>
      {isError && (
        <div>Error!</div>
      )}

      {isLoading && (
        <div>Loading...</div>
      )}


      {isError ? (
        <div>Error!</div>
      ) : (
        <>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              DATA
            </div>
          )} 
        </>
      )}


      {posts.map(post => (
        <UserPost key={post.id} post={post} />
      ))}

      {/* <h1>Liked posts</h1>
      ... */}

    </div>
  )
}