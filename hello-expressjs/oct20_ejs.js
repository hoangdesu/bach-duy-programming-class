const express = require('express');
const app = express();
const PORT = 4567;
// const path = require('path');

// middlewares
app.use(express.json()) // parsing json
app.use(express.urlencoded()) // form


// Register EJS as template engine
app.set('view engine', 'ejs');
app.set('views', './templates-oct20'); // 'views': folder that store the view files (HTMLs)

const todos = [];

app.get('/', (req, res) => {
    res.render('index', { 
        todos: todos, 
        // sortOptions?
    });
});


app.post('/add', (req, res) => {
    console.log('body: ', req.body);

    const { newTodo: content } = req.body;

    const newTodo = {
        id: crypto.randomUUID(),
        content: content,
        completed: false
    };
    
    todos.push(newTodo);

    // res.render('index', {});
    console.log(todos);

    res.redirect('/'); // status 301
});


app.get('/check/:id', (req, res) => {
    // console.log(req.params);
    const { id } = req.params

    console.log('id:', id);
    
    todos.forEach(todo => {
        if (todo.id === id) {
            console.log('changing', todo.content);
            
            todo.completed = !todo.completed;
        }
    });

    console.log(todos);

    res.redirect('/');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
