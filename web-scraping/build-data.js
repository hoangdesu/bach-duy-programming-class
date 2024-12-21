const fs = require('fs');

const file = fs.readFileSync('Champions.html');

// console.log(file);

const content = file.toString();
const namesArray = content.split('card-title">');

// console.log(content);
const champions = [];


for (let i = 0; i < namesArray.length; i++) {
    const champion = {};

    // console.log(namesArray[i]);

    const currentBigStringIncludedChamp = namesArray[i];
    let cursor = 0;
    // console.log(currentBigStringIncludedChamp[0]);
    
    let champName = '';
    while (currentBigStringIncludedChamp[cursor] != '<') {
        champName += currentBigStringIncludedChamp[cursor];
        cursor++;
    }

    // console.log(champName);
    
    champion.name = champName;
    if (champName) champions.push(champion);
}

// console.log(champions);

const urlsArray = content.split('" class="sc-ccb06989-0 jinBDR sc-d043b2-0 bZMlAb"');
// console.log(urlsArray);
for (let urlContent of urlsArray) {
    if (urlContent.includes('<a role="button" aria-label=')) {
        const url = urlContent.substring(urlContent.indexOf('https://www.leagueoflegends'));
        console.log(url);
    }
    
}





