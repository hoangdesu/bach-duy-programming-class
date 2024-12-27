const { champions } = require('./champions');

// console.log(champions);

// Higher order array methods

const query = 'Ah';
// const foundChamp = champions.find(champion => champion.name.toLowerCase() === query);
// console.log(foundChamp);

const foundChampArray = champions.filter(champ => champ.name.includes(query));

console.log(foundChampArray);




