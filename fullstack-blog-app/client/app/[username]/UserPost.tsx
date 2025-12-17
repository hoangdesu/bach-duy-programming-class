import React, { useState } from 'react';
import axios from 'axios';

const UserPost = ({ post: postProp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [post, setPost] = useState(postProp);

  const onSaveHandler = async () => {
    console.log('editing...', );
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsEditing(false);

    try {
        const res = await axios.put('/post/edit');
        // const res.data
        // setPost(new data)
        // ...
    } catch {

    }

    // PUT /posts/edit         (id in body)
    // PUT /posts/:id/edit     (id in param)
    // PUT /posts/edit?id={id} (id in query string)

  }

  return (
    <div
      key={post.id}
      style={{ border: '1px solid pink', marginBottom: '16px' }}
    >
      {isEditing ? (
        <div>
          <input type='text' name='' id='' defaultValue={post.title} />
          <br />
          <textarea name='' id='' defaultValue={post.content} />

          <button onClick={() => setIsEditing(false)}>Cancel</button>
          <button onClick={onSaveHandler}>Save</button>
        </div>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
};

export default UserPost;
