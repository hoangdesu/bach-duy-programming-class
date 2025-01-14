const cards = [];

// populate initial data
for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push('card-back.png');
    }
    cards.push(row);
}

console.log(cards);

const gridContainer = document.querySelector('#grid-container');

// create DOM elements for the cards array
cards.forEach(row => {
    row.forEach(cardSrc => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = `assets/${cardSrc}`;
        div.append(img);
        div.className = 'card-container';
        gridContainer.append(div);
    });
});

const cardDOMArray = document.querySelectorAll('.card-container');

// console.log(cardDOMArray);



cardDOMArray.forEach((cardElement, index) => {
    let showCard = false;
    cardElement.addEventListener('click', () => {
        console.log('cliked!', index);

        // console.dir(cardElement);
        // console.log(cardElement);

    //    console.log(cardElement.children);
    //    console.log(cardElement.childNodes);

        const img = cardElement.children[0];
        showCard = !showCard;

        if (showCard) {
            img.src = 'assets/ferrari.jpg';
        } else {
            img.src = 'assets/card-back.png';
        }
        
       
        
    })
});
