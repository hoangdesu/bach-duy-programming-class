const duy = {
    name: 'Duy'
}

console.log(duy.name);


const hoang = duy; // referencing the same object


hoang.name = 'Hoang';
console.log(hoang.name);

console.log(duy.name);


const nums1 = [1,2,3];
const nums2 = nums1; // referencing the same array

nums2[0] = 9;
console.log(nums2);

console.log(nums1);

// Spread operator: copy an object in JS

const car1 = {
    name: 'Ferrari',
    country: 'Italy'
}

const car2 = { ...car1 }; // copy all the keys and values from car1

car2.name = 'Lamborghini'; // will not affect car1

console.log(car1, car2);

const car3 = structuredClone(car2);
car3.name = 'Mercedes';
car3.country = 'Germany';
console.log(car3);




const arr1 = [1,2,3];
const arr2 = [...arr1];

arr2[1] = 5;
console.log(arr1, arr2);

const arr3 = structuredClone(arr2);
arr3[2] = 99;
console.log(arr3);
