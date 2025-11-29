// const express = require('express')
import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';

const app = express()
const port = 3001;

const db = Database('./data/app-data.db');

app.use(cors());
app.use(express.urlencoded())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.post('/login', (req, res) => {

    // console.log(req.body);
    const { username, password } = req.body;

    const statement = db.prepare('SELECT password FROM users WHERE username = ?');
    
    // const users = statement.all(username)[0];
    const pwdDB = statement.get(username);

    console.log(pwdDB);

    // const pwds = statement.all(password);
    // console.log(pwds);

    if (!pwdDB) return res.send('username does not exists');

    if (password !== pwdDB.password) return res.send('wrong password');

    // TODO handle errors
    // return res.send('login ok');
    
    return res.redirect('http://localhost:3000');
});


app.post('/signup', (req, res) => {

    // console.log(req.body);
    const { username, password } = req.body;

    const statement = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    statement.run(username, password);

    // TODO handle errors
    res.send('signup ok');
});


app.get('/users', (req, res) => {

    const statement = db.prepare('SELECT username FROM users');
    const usernames = statement.all();

    console.log(usernames);

    res.json(usernames);
});



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})