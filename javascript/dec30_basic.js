let a = null; // declare

console.log(typeof a);

let name = '';


let num1 = '1';
let num2 = 2

console.log(num1 * num2);

num1 = 'apple';
console.log(num1 * num2);

console.log(num1 + num2)

console.log(isNaN(num1));
console.log(isNaN(num2));
console.log(isNaN(num1 * num2));

if (isNaN(num1)) {
    console.log('need a number');
} else {
    console.log(num1 * 5);
}

console.log(typeof NaN); // number

let $ = 'rich';
let _ = '_';

console.log($, _);

let $_$ = '$_$';
console.log($_$);


console.log()

let x = 'abcxyzx';

x = x.replaceAll('x', 'r');
console.log(x);

console.log('ha'.repeat(10));

let user = null;

// console.log(typeof Math)

console.log('a' < 'b')
console.log('apple' > '98')
console.log('a' > 'aa')


console.log(0 === false)
console.log(0 == false)

// browser console only
console.warn('warning')
console.error('error')

let car = ''; // falsy value

if (car) {
    console.log(car)
} else {
    console.log('no car')
}

let num = 0;
if (num) {
    console.log('zero')
} else {
    console.log('not zero')
}

if (NaN) {
    console.log('NaN')
} else {
    console.log('not NaN')
}

// true: [], {}
if ([]) {
    console.log('empty array')
} else {
    console.log('null')
}

if (true || false) {
    console.log('still true')
}

// Arrays
const champs = ['zed', 'ahri']

console.log([...champs])
console.log(champs.join())


const nums = [15,1, true,30, 'haha',26, () => {},2,3,31];
// nums.sort()  // sort số sai!!! -> mutable
console.log(nums)

nums.sort((a, b) => {
    console.log(`a=${a}, b=${b}`);
    // a: so sau
    // b: so truoc
    return a - b;

});
console.log('after sorted:', nums);