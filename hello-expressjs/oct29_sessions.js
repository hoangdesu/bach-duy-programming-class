const express = require('express');
const session = require('express-session');
const PORT = 4567;

const app = express();

app.use(
  session({
    secret: 'hehehahahoho', // A strong, random secret for signing the session ID
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't create session until something is stored
    cookie: { secure: true }, // Set to true in production with HTTPS
  })
);

const ss = {
    views: 0
};

app.use((req, res, next) => {
    console.log(`>> current views ${req.session.views}`);
    
    next();
});

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    // ss.views++;
    res.send(`You have visited this page ${req.session.views} times.`);
  } else {
    req.session.views = 1;
    res.send('Welcome! This is your first visit.');
  }
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
