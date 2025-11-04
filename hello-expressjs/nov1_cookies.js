var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()

const secret = 'hahahoho';
app.use(cookieParser(secret));


app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)

  res.send('hehe');
});


// Server -> Client
app.get('/cookies', (req, res) => {
    res.cookie('food', 'udon', { signed: true });

    res.cookie('username', 'duy');
    
    res.send(req.cookies);
});

app.get('/hehe', (req, res) => {
    console.log('Cookies: ', req.cookies)
    console.log('Cookies: ', req.signedCookies)
    res.send(req.cookies);
});


const port = 8081;
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});


// curl command that sends an HTTP request with two cookies
// curl http://127.0.0.1:8080 --cookie "Cho=Kim;Greet=Hello"
