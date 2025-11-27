const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('my-lol.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }

  console.log('Connected to the SQLite database.');
});

db.all('SELECT * FROM champions', [], (err, rows) => {
  if (err) {
    console.error('Error retrieving data:', err.message);
    return;
  }

  console.log('All champions:');
  rows.forEach((champ) => {
    console.log(`${champ.id}: ${champ.name} (${champ.roles})`);
  });

//   closeDatabase(db);
});

