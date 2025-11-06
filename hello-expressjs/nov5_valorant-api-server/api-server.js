// https://valorant-api.com/v1/agents?language=vi-VN

const express = require('express');
const session = require('express-session');
const PORT = 4567;

const app = express();

// Middlewares
// app.use(
//   session({
//     secret: '=))', // A strong, random secret for signing the session ID
//     resave: false, // Don't save session if unmodified
//     saveUninitialized: false, // Don't create session until something is stored
//     cookie: { 
//       secure: false, // Set to true in production with HTTPS
//       // maxAge: 1000 * 10 // 10s
//     } 
//   })
// );

// app.use(express.urlencoded()) // form

// app.set('view engine', 'ejs');
// app.set('views', './nov4'); // 'views': folder that store the view files (HTMLs)


// app.use((req, res, next) => {
//     console.log('> session:', req.session);
//     next();
// });

const fs = require('fs');

const file = fs.readFileSync('agents.json');
const agents = JSON.parse(file)['data'];


app.get('/api/v1/agents', (req, res) => {
    res.json(agents);
});


app.get('/api/v1/agents/:uuid', (req, res) => {
    const { uuid } = req.params;

    for (let i = 0; i < agents.length; i++) {
        if (agents[i].uuid === uuid) {
            return res.json(agents[i]);
        }
    }

    return res.status(404).json('Invalid UUID');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
