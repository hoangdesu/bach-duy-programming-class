/* eslint-disable @next/next/no-img-element */

'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FormEvent, ChangeEvent, useState, useEffect } from 'react';

export default function NewPostPage() {
  const [previewImage, setPreviewImage] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/330px-Placeholder_view_vector.svg.png');

//   TODO: protect this page using shared content of logged in state
  const [loggedInUser, setLoggedInUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

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

        // Protected route: user must be loggedin to create a new post
        if (!data) return router.push('/');
      });
  }, [pathname]);

  const uploadHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    console.log(title, content);

    fetch('http://localhost:3001/posts/new', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies in the request
      body: JSON.stringify({ title, content }),
    })
        .then(res => {
            if (res.ok) return res.json();

            // TODO
            // throw new Error(res.msg)
        })
        .then(data => {
            console.log('> new post id:', data.post_id);
            
        })
        .catch(err => {
            // TODO
        });
  };

//   TODO: future feature to support image upload
  const onImagePreviewSelect = (evt: ChangeEvent<HTMLInputElement>) => {
    const files = evt.currentTarget.files;

    console.log('files:', files);

    // setPreviewImage(files[0].name)

    // if (files > 0) {
    //     const reader = new FileReader();
    //     reader.onload = (event) => {
    //         const fileContent = event.target?.result
    //     }
    // }
    
  };

//   Protected route: user must be loggedin to create a new post
//   if (!loggedInUser) {
//     router.push('/');
//   }

  return (
    <div>
      <h1>New post</h1>

      <form onSubmit={uploadHandler}>

        <div>
            <input type='text' placeholder='Title' name='title' />
        </div>
        <div>
            <textarea placeholder='Content' name='content' rows={10} cols={50} />
        </div>
        {/* 
        <input type='file' onChange={onImagePreviewSelect} />
        <img
          src={previewImage}
          alt=""
        /> 
        */}
        <button>Create post</button>
      </form>
    </div>
  );
}

// binary

// [
//     [r,g,b] [] []
//     [] [] []
//     [] [] [],

// frame2,
// ]

// base64 encoding

// [
//     frame1: sound1,

// ]
