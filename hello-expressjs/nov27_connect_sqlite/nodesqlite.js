const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('./data/my-lol.db');

const query = db.prepare('SELECT * FROM champions');
const champs = query.all();

console.log('champs:', champs);
