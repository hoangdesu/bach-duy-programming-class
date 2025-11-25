// uname = Enter username:
// pwd = Enter password:

// if uname === db.username && pwd === db.password

// if uname === 'duy' && pwd === 'hehe'

// Encrypt the password
// cipher = encrypted text

// encrypt('hehe') -> 'abcxyhuhuz123'

// Salt:

// a
// b
// c
// ...
// z
// aa
// ab

// 16

// 24 chars + 10 digits
// 34 possibilities

// 34 ^ 16

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bcrypt = require('bcrypt');
const saltRounds = 11;
const myPlaintextPassword = 'hehe';
const someOtherPlaintextPassword = 'not_bacon';

const salt = bcrypt.genSaltSync(saltRounds);

const hashedPwd = bcrypt.hashSync(myPlaintextPassword, salt);

console.log(hashedPwd);

// Blowfish hashing algorithm

// $2b$10$izNn8M3t2eLLYHXIysx5zuvAU5L5ssg9m0ppoxVxTAPar4Ww9Ruq2
// $2b$10$8z9cuclrL89gfrh7NLCCO.Hq6S9F6XEWJmdZwNHXT3Nc3mQ9mSJw2
// $2b$10$GPm5wCjLmJFI9KHO73NJsOusWZfxchwu4mCFxUGRIoOimUPrWPFGS

// plaintext -> hashed ->
// $2b$10$8z9cuclrL89gfrh7NLCCO.Hq6S9F6XEWJmdZwNHXT3Nc3mQ9mSJw2
// ===
// $2b$10$GPm5wCjLmJFI9KHO73NJsOusWZfxchwu4mCFxUGRIoOimUPrWPFGS

rl.question('Enter password: ', (inp) => {
  if (bcrypt.compareSync(inp, hashedPwd)) {
    console.log('login successfully');
  } else {
    console.log('login failed');
  }

  rl.close(); // Close the readline interface after getting the input
});
