const express = require('express');
const session = require('express-session');
const PORT = 4567;

const app = express();

// const accounts = [
//   {
//     username: ''
//     password: ''
//   },
//   {
//     username: ''
//     password: ''
//   },
//   {
//     username: ''
//     password: ''
//   },
// ];


const accounts = {
  'duy': 'ehehe',
  'hoang': 'haha'
};


// Middlewares
app.use(
  session({
    secret: '=))', // A strong, random secret for signing the session ID
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't create session until something is stored
    cookie: { 
      secure: false, // Set to true in production with HTTPS
      // maxAge: 1000 * 10 // 10s
    } 
  })
);

app.use(express.urlencoded()) // form

app.set('view engine', 'ejs');
app.set('views', './nov4'); // 'views': folder that store the view files (HTMLs)


app.use((req, res, next) => {
    console.log('> session:', req.session);
    next();
});


app.get('/', (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.render('login');
    }

    return res.render('index');
});


app.post('/login', (req, res) => {
    const { usr, pwd } = req.body;

    console.log(req.body);
    
    if (usr.toLowerCase() === 'duy' && pwd === 'ehehe') {
        req.session.isLoggedIn = true;
        return res.redirect('/');
    }

    return res.send('login failed');
});



app.post('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) return next(err);

    res.clearCookie('connect.sid');
    // res.render('login');
    res.redirect('/');
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
