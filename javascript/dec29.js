let a = 1;
let b = 2;

// let c = a;
// a = b;
// b = c;
// console.log(a, b);


// pass by values
function swap(a, b) {
    let c = a;
    a = b;
    b = c;
    console.log('inside:', a, b);
}

swap(a, b);
console.log('outside:', a, b);


const duy = {
    name: 'Duy',
    age: 18
};

// pass by reference
const changeAge = (person, age) => {
    person.age = age;
}

changeAge(duy, 20);

console.log('inside:', duy);


// if (!myPost.liked) {

//     // myPost.liked = true

//     // myPost.reacted = 'haha'
// }


const arr = [1,2,3]

// pass by reference 
const doubledArray = (arr) => {
    // arr.forEach(n => n * 2);


    for (let i = 0; i < arr.length; i++) {
        // arr[i] *= 2; // direct access to modify values
        let n = arr[i];
        n = n * 2;
    }
}

doubledArray(arr);
console.log(arr);


// spread operator ...

const arr2 = [...arr];

arr2[1] = 99;
console.log(arr, arr2);


// Object/Array destructuring

// console.log(duy.name);
// console.log(duy.age);

// pulling separate fields from an object

const { name, age } = duy;
// let name = duy.name;

console.log(name);
console.log(age);


const tin = {
    name: 'Tin',
    age: 20
}

// rename fields after destructure
const { age: age2, name: name2 } = tin;
console.log(name2, age2);


const champions = ['Zed', 'Ahri', 'LeBlanc', (name) => {console.log('Champion: ' + name)}, 1];

const [bestChamp, waifu, trashChamp] = champions; 

// let waifu = champions[1];

console.log(waifu);

const [,,prevWaifu] = champions;
console.log(prevWaifu);

const [,,,printChamp] = champions;
printChamp('Zoe');





