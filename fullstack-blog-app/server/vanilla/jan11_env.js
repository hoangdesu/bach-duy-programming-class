console.log(process.env.PROJECT_NAME);

console.log(process.env.PORT)

// MYNAME=duy node jan11_env.js

// pnpm run dev: "node --env-file=.dev.env jan11_env.js"

let file = '.dev.env';

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'dev'
}
else {
    file = '.prod.env';
}
process.loadEnvFile(file);

// => require('dotenv').load(filename) '.dev.env' | '.prod.env'

console.log(process.env.NODE_ENV + ' environment');

console.log(process.env.PORT)