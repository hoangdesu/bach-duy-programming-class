const Database = require('better-sqlite3');
const db = new Database('./data/my-lol.db');

// better performance: recommended
db.pragma('journal_mode = WAL');


const insertChamp = db.prepare('INSERT INTO champions (name, roles) VALUES (?, ?)');
// insertChamp.run('Zoe', 'mid,support');
// insertChamp.run('Taliyah', 'mid,jungle');


const champs = db.prepare('SELECT * FROM champions').all();
console.log('All champions:');
console.log(champs);