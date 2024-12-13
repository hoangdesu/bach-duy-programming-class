// traditional syntax
// function add(a, b) {
//     return a + b
// }


// function expression
// const add = function (a, b) {
//     return a + b;
// }


// Arrow function: compact syntax of function expression
const add = (a, b) => {
    return a + b;
}

// console.log(add(2, 8));


const sayHi = name => {
    console.log(`Hi ${name}!`);
}

// sayHi('Duy')


// const isEven = (num) => {
//     // if (num % 2 === 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }
    
//     // return num % 2 === 0;
// }


// Implicit return
// const isEven = num => num % 2 === 0;

// console.log(isEven(3));



// const getData = () => {
//     // object
//     // const duy = {
//     //     name: 'Bach Duy',
//     //     game: 'Lien Minh'
//     // }

//     // return duy;

//     return {
//         name: 'Bach Duy',
//         game: 'Lien Minh'
//     }
// }


// implicitly return an object
const getData = () => ({
    name: 'Bach Duy',
    game: 'Lien Minh'
});

// console.log(getData());


// const games = ['lien minh', 'Astro Bot'];

const getGames = () => ['lien minh', 'Astro Bot'];

console.log(getGames());

// function fly() {

// }

// fly(bird)

// fly(human)

// const math = new Math();
// math.random()



// const getNguyen = name => `${name} Nguyen`;

// // Higher order function vs Callback

// const sayHello = (getNguyen) => {
//     console.log(`Hello ${getNguyen('Hoang')}`);
// }

// sayHello(getNguyen);


const nums = [1, 2, 3];

const printNum = (num, index) => {
    console.log(`${index}. ${num}`)
}

nums.forEach(printNum);

// const addEmailToSubscribeList = () => {
// }

// button.addEventListener('click', addEmailToSubscribeList);

// button.addEventListener('click', () => {

// });

// button.addEventListener('click', () => console.log('click));
