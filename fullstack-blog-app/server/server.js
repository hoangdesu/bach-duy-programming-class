// const express = require('express')
import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import SQLiteStoreFactory from 'connect-sqlite3';

import session from 'express-session';

const app = express();
const port = 3001;

const db = Database('./data/app-data.db');

// handle session persist manually
// app.use(() => {
//   if no session in db:
//     insert one
//   else:
//     get that session from db
// });

app.use(
  cors({
    origin: 'http://localhost:3000', // Your Next.js client URL
    // origin: '*',
    credentials: true, // Allow cookies to be sent
  })
);

// app.use(express.urlencoded())
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.use(() => {

// });

// Configure and use the express-session middleware
// app.use(session({
//   secret: 'very secret', // A secret string used to sign the session ID cookie
//   resave: false,             // Don't save session if unmodified
//   saveUninitialized: true,   // Save uninitialized sessions to the store
// //   cookie: {
// //     maxAge: 1000 * 60 * 60 * 24 // Session expiration time in milliseconds (e.g., 24 hours)
// //   }
// cookie: {
//       expires: 60 * 60 * 24,
//       httpOnly: false,
//     },
// }));

const SQLiteStore = SQLiteStoreFactory(session);

app.use(
  session({
    name: 'secret-session',
    store: new SQLiteStore({
      db: 'app-data.db',
      dir: './data',
      table: 'sessions', // default: 'sessions'
    }),
    secret: 'hehehahahoho', // A strong, random secret for signing the session ID
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't create session until something is stored
    cookie: {
      secure: false, // Set to true in production with HTTPS
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      sameSite: 'lax', // Allows cookie to be sent in cross-site requests
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      // maxAge: 1000 * 5 // 5s
    },
  })
);

app.use((req, res, next) => {
  console.log('user:', req.session.user);

  console.log('cookies:', req.headers.cookie);

  console.log('> headers', req.headers);

  next();
});


// protect app on the global scope
app.use((req, res, next) => {
  if (req.headers['fking-secret-message'] !== '=)))') return next('Error: where u from bro??');

  return next();
});


app.get('/auth', (req, res) => {
  if (req.session.user && req.session.user.isLoggedIn)
    return res.json(req.session.user.username);

  return res.json(false);
});

const requiresLoggedIn = (req, res, next) => {
  if (req.session.user && req.session.user.isLoggedIn) return next();

  return next('You are not logged in');
};

app.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const statement = db.prepare('SELECT password FROM users WHERE username = ?');

  // const users = statement.all(username)[0];
  const pwdDB = statement.get(username);

  console.log(pwdDB);

  // const pwds = statement.all(password);
  // console.log(pwds);

  if (!pwdDB) return res.status(404).send('username does not exists');

  if (password !== pwdDB.password) return res.status(401).send('wrong password');

  // return res.send('login ok');

  req.session.user = {
    username: username,
    isLoggedIn: true,
  };

  console.log('> session:', req.session);

  // return res.redirect('http://localhost:3000');
  return res.status(200).send('login ok');
  // return res.sendStatus(301)
});

app.post('/signup', (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;

  const statement = db.prepare(
    'INSERT INTO users (username, password) VALUES (?, ?)'
  );
  statement.run(username, password);

  // TODO handle errors
  res.send('signup ok');
});

app.get('/users', (req, res) => {
  // // Access the session - this is how you identify the client
  // const session = req.session;
  // const user = req.session.user;

  // // Log session information for debugging
  // console.log('Session ID:', req.sessionID);
  // console.log('Session user:', user);
  // console.log('Full session:', session);

  // // You can also identify the client by:
  // // - req.sessionID (unique session identifier)
  // // - req.ip (client IP address)
  // // - req.headers['user-agent'] (browser/client info)
  // console.log('Client IP:', req.ip || req.connection.remoteAddress);
  // console.log('User-Agent:', req.headers['user-agent']);

  // // Check if user is logged in
  // if (!user || !user.isLoggedIn) {
  //     return res.status(401).json({ error: 'Unauthorized - Please login first' });
  // }

  if (!req.session.user) return res.status(401).json({ message: 'error' });
  // return res.status(401).send('error');

  // // User is authenticated, proceed with the request
  const statement = db.prepare('SELECT username FROM users');
  const usernames = statement.all();

  console.log(usernames);

  return res.status(200).json(usernames);
});

app.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }

    // // Session destroyed, redirect or send a response
    res.redirect('http://localhost:3000/');
  });
});

app.post('/posts/new', (req, res) => {
  const { title, content } = req.body;

  // const form = body

  // if form.validate() -> OK

  if (!title || !content)
    return res.status(400).json({ error: 'Missing post data' });

  const { username } = req.session.user;

  if (!username)
    return res.status(422).json({ error: 'You must be logged in' });

  console.log(title, content, username);

  const statement = db.prepare(`
    INSERT INTO posts (title, content, username) 
    VALUES (?, ?, ?)
    RETURNING id
  `);

  const row = statement.get(title, content, username); // -> {id: 1}

  return res.status(201).json({ post_id: row.id });
});

app.get('/posts', (req, res) => {
  const statement = db.prepare(`
    SELECT * FROM posts
    ORDER BY created_at DESC
    LIMIT 10
  `);

  const posts = statement.all();

  return res.json(posts);
});

app.get('/posts/:id', (req, res) => {});


app.get('/users/:username/posts/', (req, res) => {
  const { username } = req.params;

  // Authorization
  // const usr = req.session.user

  const statement = db.prepare(`
    SELECT * FROM posts
    WHERE username = ?
    ORDER BY created_at DESC
    LIMIT 10
  `);

  // TODO:
  // joins likes table
  // [
  //   {
  //     title,
  //     content,
  //     created_at,

  //     liked: bool
  //   }
  // ]

  // JOINS likes


  // SELECT WHERE ... IN (
  //   select post id
  //   WHERE username = ''
  //  ) -> TRUE


  const posts = statement.all(username);

  // mimic data loading
  setTimeout(() => {
    // return res.json(posts);

    // mimic error
    return res.status(400).json(posts);
  }, 2000);

});


// liked_posts(:username) -> post_id []


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
