'use client';

// import Image from "next/image";

import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import axiosInstance from './configs/axiosInstance';

// import { notFound } from 'next/navigation'

// Create a client -> must be a global object
const queryClient = new QueryClient();

const fetchAllPosts = async () => {
  const res = await axiosInstance.get('/posts');
  return res.data;
}

export default function HomeContainer() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  )
}

export function HomePage() {
  // const [posts, setPosts] = useState(null);

  // useEffect(() => {
    // fetch('http://localhost:3001/posts', {
    //   credentials: 'include', // Include cookies in the request
    // })
    //   .then((res) => res.json())
    //   .then((posts) => {
    //     console.log(posts);
    //     setPosts(posts);
    //   });

    // const fetchData = async () => {}

    // async function fetchData() {
    //   try {
    //     const { data: posts } = await axios.get('/posts');
    //     setPosts(posts);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

    // fetchData();

    // IIFE: Immediately invoked function expression

    // (async () => {
    //   try {
    //     const { data: posts } = await axios.get('/posts');
    //     setPosts(posts);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // })();

    // (function () {
    //   ...
    // })()

    // () => {}
    // function

    // const a = function() {
    //   console.log('calling this from function a:', this);
    // };

    // a();

    // function b() {
    //   console.log('calling this from function b:', this);
    // }

    // b();
  // }, []);


  // switch over to using react query to manage states

  const { isPending, error, data: posts } = useQuery({
     queryKey: ['postsData'], // use internally for caching
     queryFn: fetchAllPosts
    // queryFn: () => axiosInstance.get('/posts').then(res => res.data)
  });

  // if (isPending) return <div>Loading...</div>

  // if (error) return <div>Error</div>


  return (
    <div className='my-container'>
      
        <h1>News Feed</h1>

        {isPending && <div>Loading...</div>}

        {error && (<div>Sum thing wong</div>)}

        <div className='flex flex-col gap-8'>
          {posts &&
            posts.map((post) => (
              <div
                key={post.id}
                style={{
                  border: '1px solid pink',
                  // margin: '16px 0',
                  padding: '16px',
                }}
              >
                <h3>{post.title}</h3>
                <p>
                  Author:{' '}
                  <Link href={`/${post.username}`}>{post.username}</Link>
                </p>
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
