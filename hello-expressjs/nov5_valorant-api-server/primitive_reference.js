const nums = [1, 2, 3];

for (let num of nums) {
    num *= 2;
}

console.log(nums);

const numObjects = [
    {
        val: 1
    },
    {
        val: 2
    }
];

for (let obj of numObjects) {
    obj.val *= 2;
}

console.log(numObjects);
