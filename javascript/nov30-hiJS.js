// variables: let vs var

// if (true) {
//     let x = 10;
// }

// console.log(x);


// constant: const

// const a = 10;
// // a = 5;
// console.log(a);


// strings
let firstName = 'Duy'
let lastName = "Bach";

// String interpolation


// let fullName = firstName + ' ' + lastName
let fullName = `Loi ${lastName} ${firstName}`;
console.log(fullName);


console.log(typeof 1.5);
console.log(typeof 6);
console.log(typeof fullName);
console.log(typeof true);


let num = '5'
console.log(typeof num);
console.log(typeof parseInt(num));
console.log(typeof parseInt(num));
console.log(typeof parseFloat(num));

console.log(0 == '0');
console.log(0 === '0'); // strict comparison
console.log(0 == []);
console.log('0' == []);

// if - else if - else

let money = 3000000
let lambo = 3_000_000;

if (money < lambo) {
    console.log('go work ur ass off');
} else if (money === lambo) {
    console.log('just enough');
} else {
    console.log('ur rich');
}

for (let i = 0; i < 10; i++) {
    console.log(i);
       
}







