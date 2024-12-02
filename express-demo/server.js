const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.urlencoded());

app.get('/', (req, res) => {
    // res.send('<h1 style="color: red;">chill bro</h1>');
    const html = '<img src="https://cdn.tuoitre.vn/thumb_w/1200/471584752817336320/2024/11/24/chill-guy-ttc-1732421724981667208220.jpg"/><h1>Chill guy :D</h1><form action="/" method="post"><input type="text" name="name"><button>Submit</button></form>'
    res.send(html)
});

app.post('/', (req, res) => {
    const body = req.body;
    const name = body.name;
    res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
    console.log(`🚀 server started at http://localhost:${PORT}`); 
});
