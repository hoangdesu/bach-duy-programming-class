import express from 'express';
import cors from 'cors';
import fs from 'fs'

const app = express();

app.use(cors());

const PORT = 4321;

const filePath = fs.readFileSync('./pokemons.json', 'utf8');

app.get('/pokemons', (req, res) => {
    try {
        const pokemons = JSON.parse(filePath);
        return res.json(pokemons);
    } catch (e) {
        res.send(e);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    
})