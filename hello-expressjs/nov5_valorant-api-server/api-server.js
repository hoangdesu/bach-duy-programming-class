// https://valorant-api.com/v1/agents?language=vi-VN

const express = require('express');
const session = require('express-session');
const PORT = 4567;

const app = express();

// Routers
const agentsRouter = require('./routes/agents');
const weaponsRouter = require('./routes/weapons');
const mapsRouter = require('./routes/maps');


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
const path = require('path');

const agentsDataPath = path.join(__dirname, 'data', 'agents');
console.log('> agentsDataPath', agentsDataPath);


const languageOptions = ['en', 'vi', 'jp'];
let lang = languageOptions[0];

const agentFiles = languageOptions.map(lang => {
    const agentFilePath = path.join(agentsDataPath, lang)  + '.json';
    console.log('> agentFile:', agentFilePath);
    
    return JSON.parse(fs.readFileSync(agentFilePath))['data'];
});

// const agents = JSON.parse(file)['data'];

// console.log('> agentFiles', agentFiles);



// Middlewares
app.use((req, res, next) => {
    const { lang } = req.query;
    if (!lang) req.selectedLang = 'en'
    else req.selectedLang = lang;

    next();
});


// app.get('/api/v1/agents', (req, res) => {

//     console.log('selected lang: ', req.selectedLang);
    
//     res.json(agents);
// });


// app.get('/api/v1/agents/:uuid', (req, res) => {
//     const { uuid } = req.params;

//     for (const agent of agents) {
//         if (agent.uuid === uuid) {
//             return res.json(agent);
//         }
//     }

//     return res.status(404).json('Invalid UUID');
// });


// Using Routers
app.use('/', agentsRouter);
app.use('/api/v1/weapons/', weaponsRouter);
app.use('/api/v1/maps/', mapsRouter);


// Combined route handlers
// app.route('/')
//     .get(callback handler)
//     .post(callback handler)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
