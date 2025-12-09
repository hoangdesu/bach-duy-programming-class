'use client';

// import Image from "next/image";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/posts', {
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
      <h1>News Feed</h1>

      <div>
        {posts &&
          posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: '1px solid pink',
                margin: '16px 0',
                padding: '16px',
              }}
            >
              <h3>{post.title}</h3>
              <p>Author: <Link href={`/${post.username}`}>{post.username}</Link></p>
              <p>Created at: {post.created_at}</p>
              <pre
                style={{
                  fontFamily: 'sans-serif',
                  whiteSpace:
                    'pre-wrap' /* Allows text to wrap within the pre tag */,
                  wordWrap:
                    'break-word' /* Prevents long words from overflowing */,
                }}
              >
                {post.content}
              </pre>
            </div>
          ))}
      </div>
    </div>
  );
}
