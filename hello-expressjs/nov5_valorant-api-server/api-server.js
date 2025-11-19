// https://valorant-api.com/v1/agents?language=vi-VN

const express = require('express');
const session = require('express-session');
const path = require('path');

// Swagger docs
const swaggerUi = require('swagger-ui-express');
const swaggerJSONFile = require('./swagger.json');
const swaggerJsdoc = require("swagger-jsdoc");

const PORT = 4567;

const app = express();

// Routers
const agentsRouter = require('./routes/agents');
const weaponsRouter = require('./routes/weapons');
const mapsRouter = require('./routes/maps');
const weaponSkinsRouter = require('./routes/weaponSkins');


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

// const fs = require('fs');
// const path = require('path');

// const agentsDataPath = path.join(__dirname, 'data', 'agents');
// console.log('> agentsDataPath', agentsDataPath);

// const agentFiles = languageOptions.map(lang => {
//     const agentFilePath = path.join(agentsDataPath, lang)  + '.json';
//     console.log('> agentFile:', agentFilePath);
    
//     return JSON.parse(fs.readFileSync(agentFilePath))['data'];
// });

// const agents = JSON.parse(file)['data'];

// console.log('> agentFiles', agentFiles);



// Middlewares
app.use((req, res, next) => {
    const { lang } = req.query;
    // if (!lang) req.selectedLang = 'en'
    // else req.selectedLang = lang;

    // other shorter syntaxes for if-else
      
    // req.lang = !lang ? 'en' : lang;
    // req.lang = lang || 'en';
    req.selectedLang = lang ?? 'en-US';

    
    // Nullish Coalescing Operator
    // let a = 0 ?? 1; // a = 0 => null & undefined
    // let b = 0 || 1; // b = 1 => falsy values

    next();
});


// make the folder named "static" to be publicly accessible via direct link
app.use(express.static(path.join(__dirname, 'static')));

// prefixed static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
app.use('/api/v1/', agentsRouter);
app.use('/api/v1/maps/', mapsRouter);
app.use('/api/v1/', weaponsRouter);
// app.use('/api/v1/weapons/skins', weaponSkinsRouter);

// SWAGGER
// Using JSON file
app.use('/api-json-example', swaggerUi.serve, swaggerUi.setup(swaggerJSONFile));

// Using JSDOCS in route files
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const JSDocSpecs = swaggerJsdoc(options);

app.use("/jsdocs", swaggerUi.serve, swaggerUi.setup(JSDocSpecs, { explorer: true }));
// app.use("/", swaggerUi.serve, swaggerUi.setup(JSDocSpecs, { explorer: true }));
// Combined route handlers
// app.route('/')
//     .get(callback handler)
//     .post(callback handler)


// Catch all routes
app.use((req, res, next) => {
  res.status(404).send('404 not found');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
