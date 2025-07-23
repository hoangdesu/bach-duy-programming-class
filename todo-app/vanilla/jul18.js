const aa = {
    name: 'a',
    age: 1
}

// b is only referencing a
const bb = {...aa};

bb.name = 'b';

console.log(bb);
console.log(aa);

const a = [1,2,3];
const b = [...a]; // spread operator: list + object
const c = structuredClone(a);

b[0] = 10;
c[1] = 99;

console.log(b);
console.log(a);
console.log(c);

