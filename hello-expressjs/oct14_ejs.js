const express = require('express');
const app = express();
const PORT = 4567;
// const path = require('path');

// middlewares
app.use(express.json()) // parsing json
app.use(express.urlencoded()) // form


// Register EJS as template engine
app.set('view engine', 'ejs');
app.set('views', './templates'); // 'views': folder that store the view files (HTMLs)

console.log(__dirname);



app.get('/', (req, res) => {
    // const file = path.join(__dirname, 'templates', 'index');
    // res.render('./templates/index');
    
    res.render('index');
});


app.get('/hello', (req, res) => {

    let { name } = req.query;

    if (!name) name = 'World :D';

    const hobbies = ['games', 'react', 'express']; // object

    const mains = [
        {
            name: 'mundo',
            lane: 'jungle',
            isFavorite: true
        },
        {
            name: 'aatrox',
            lane: 'top'
        }
    ]

    res.render('hello', {
        name: name,
        date: new Date(),
        hobbiesList: hobbies,
        mainChamps: mains
    });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
