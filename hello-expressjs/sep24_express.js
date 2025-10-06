const express = require('express');
const app = express();
const port = 3456;

let champs = ['Zed', 'LeBlanc', 'Ahri'];
const notSoSecret = 'ehehe:D';

// middlewares
app.use(express.json()) // parsing json
app.use(express.urlencoded()) // form


const users = [
    {
        name: duy,
        isloggedin: true
    },
    {
        name: hoang,
        isloggedin: false
    }
];



// custom middleware

const logRequest = (req, res, next) => {

    const date = new Date(Date.now()).toLocaleString("en-GB", { timeZone: "UTC" });
    const method = req.method;
    console.log(`[${date}] 🚀 Receive a ${method} request at: ${req.originalUrl}`);
    
    next(); // request successful. move on to the next handler
}

const makeErrorRequest = (req, res, next) => {
    return next(new Error("Hacked!!!!")); // throw error inside next()
}


// app scope
app.use(logRequest);

// hijacked
// app.use(makeErrorRequest)


// middleware to protect route
const loggedInRequired = (req, res, next) => {
    // session / token

    console.log('>> loggedInRequired middleware');
    
    console.log('headers:', req.headers);

    const { authorization } = req.headers;

    console.log(authorization);
    

    if (authorization !== notSoSecret) {
        return next('WHERE THE SECRET BRO???');
    }
    
    return next();
    
}


const isAuthor = (req, res, next) => {
    const { username } = req.headers;
    
    if (!username) return next('Missing username');

    if (username !== 'hehe') return next('Wrong username');

    return next();
}


// server <- token -> client



app.use(loggedInRequired);


app.get('/champs', 
    // logRequest, // middleware -> handler scope
      (req, res) => {
    // console.log(req.body);
    
    res.json(champs);
});


app.post('/champs', 
    loggedInRequired,   // ✅
    isAuthor,           // ✅
    (req, res) => {
    console.log(req.body)

    // console.log(req);

    
    const { champ } = req.body;

    if (!champ) return res.status(500).send('Error');

    champs.push(champ);

    res.json(champs);
});


app.put('/champs', (req, res) => {
    const { oldChamp, newChamp } = req.body;

    // console.log(oldChamp, newChamp);
    

    const i = champs.indexOf(oldChamp);
    // console.log(i);
    
    champs[i] = newChamp;

    res.json(champs);
});



app.delete('/champs', (req, res) => {

    console.log(req.body);

    const { rmChamp } = req.body;

    champs = champs.filter(champ => champ !== rmChamp)

    res.json(champs);

});


// Handle all other requests for ALL methods
// Custom error handling
app.use((req, res) => {
    res.status(404).send('<h1>404 not found :(</h1>');
});



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
