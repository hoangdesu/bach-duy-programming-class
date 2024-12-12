// dynamic 

const games = [];

// add items
games.push('lien minh');
games.push('overwatch');

games[0] = 'league of legends';
games[2] = 'screenbound';


// remove
const removed = games.pop();
console.log('removed:', removed);

const oldGames = ['dota 2', 'neighbour from hell', 'pokemon']
const combinedGames = games.concat(oldGames); // immutable

// console.log(combinedGames);

console.log(combinedGames.indexOf('pokemon'));
console.log(combinedGames.indexOf('pikachu'));


// delete combinedGames[3]

// pop(index)

// remove 
// const removedGames = combinedGames.splice(2, 1); // mutable
// console.log('removedGames', removedGames);


// const sliced = combinedGames.slice(1, 30);
// console.log('sliced', sliced);

// Removes the first element
console.log(combinedGames.shift());


// insert at the start of the array
combinedGames.unshift('lien minh');



// combinedGames.forEach((game, index, array) => {
//     console.log(index, game);
// });


function printElement(game, index) {
    console.log(index, game);
}

combinedGames.forEach(printElement); // callback function

games.forEach(printElement);

console.log(combinedGames);


const nums = [1,2,3,4,5];

for (let num of nums) {
    if (num === 3) break;
    console.log(num);
}

// nums.forEach(num => {
//     if (num === 3) break;
//     console.log(num);
// });

{/* <ul>
    <li>lien minh</li>
</ul> */}


const listItemGameArray = combinedGames.map(game => {
    return `<li>${game}</li>`
});


console.log(listItemGameArray);


// const doubleNums = [];
// nums.forEach(num => {
//     doubleNums.push(num*2);
// });

// const doubleNums = nums.map(num => num * 2); // => [2,4,6,8,10]
const doubleNums = nums.map(num => {
    return num * 2;
});
console.log(doubleNums);

