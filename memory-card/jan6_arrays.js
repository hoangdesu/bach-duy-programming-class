const grid = ['a', 'b', 'c'];

// grid.forEach(el => {
//     // console.log(el)
//     el = 'z'
// });


// =>> only can directly access and change values thru traditional for loop
// for (let i = 0; i < grid.length; i++) {
//     // grid[i] = 'z' // -> direct access

//     let el = grid[i]; // copied value from grid[i] to el
//     el = 'z'; // reference
// }

// shorthand for loop:
for (let el of grid) {
    el = 'z'
}

// String[] grid
// for (String el : grid) { ... }


console.log(grid);


// shuffle 
...

const shuffle = (array) => {
    const shuffledArray = [];
}

const shuffledArray = shuffle(grid);
console.log(shuffledArray);
