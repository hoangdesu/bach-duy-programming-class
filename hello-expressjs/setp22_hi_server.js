const express = require('express');
const app = express();
const port = 3456;


// Route handlers / Endpoint handlers
app.get('/', (req, res) => {
  res.send('Hello World =D !!');
});


app.get('/hi', (req, res) => {
    res.send('<h1><u>Hiiii</u></h1>');
});



app.post('/hi', (req, res) => {
    res.send('received a POST request');
});



app.get('/menu', (req, res) => {
    const menu = ['sua chua viet quat', 'sinh to sapoche', 'ca phe sua da'];
    
    // menu.push('water');

    res.json(menu);
});



// Path params
app.get('/hello/:somebodyname', (req, res) => {
    // console.log(req.params.clientname);
    
    const { somebodyname } = req.params;


    res.send(`Hello ${somebodyname}!`);
});


app.get('/hello', (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.send('Hello world :D')
    }

    return res.send(`Hello ${name}!`)

});


// TODO: list of food
// e.g. 

// menu = [
//     {
//         'id': 1,
//         'name': 'com tam',
//         'price': '50k'
//     },
//     {
//         'id': 2,
//         'name': 'bun rieu',
//         'price': '75k'
//     }
// ]


// Menu API
// GET /menu       -> full list
// GET /menu/:id   -> 1 food only
// GET /menu/add?name=abc+xyz&price=55k -> full list + new food
// GET /menu/search?name=com -> return a list containing com



// Calculator API
// GET /cal/:a/:b 
// e.g. http://localhost:3456/cal/5/10?op=+ -> return a Html string: "5 + 10 = 15"
// http://localhost:3456/cal/-5/10?op=- -> return a Html string: "-5 - 10 = -15"
// http://localhost:3456/cal/5/10?op=* -> return a Html string: "5 x 10 = 15"
// http://localhost:3456/cal/5/10?op=/ -> return a Html string: "5 / 10 = 15"
// http://localhost:3456/cal/5/10?op=! -> return a Html string: "! is not a valid operator. Choose 1 from +-*/"


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
