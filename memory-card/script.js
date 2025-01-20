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
cards.forEach((row, rowId) => {
    row.forEach((cardSrc, colId) => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = `assets/${cardSrc}`;
        div.append(img);
        div.className = 'card-container';
        div.id = `${rowId}-${colId}`
        gridContainer.append(div);
    });
});

const cardDOMArray = document.querySelectorAll('.card-container');

// console.log(cardDOMArray);


let selectedCards = []; // max = 2

cardDOMArray.forEach((cardElement, index) => {
    let showCard = false;
    cardElement.addEventListener('click', () => {
        
        console.log('cliked!', index);
        
        console.log(cardElement.id);
        

        // if (selectedCards)
        // for (let selectedCard of selectedCards) {
        //     if (selectedCard !== cardElement.id) {
        //         selectedCards.push(cardElement.id);
        //     }
        // }

        // guard clause
        if (selectedCards.includes(cardElement.id)) return;
        

        if (!selectedCards.includes(cardElement.id)) {
            selectedCards.push(cardElement.id);
            // selectedCards.push
        }


        if (selectedCards.length === 2) {

            setTimeout(() => {
                console.log('flipping the card back');
                
                
            }, 1000);

            selectedCards = [];
        }
        

        console.log(selectedCards);

        // i
        


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
