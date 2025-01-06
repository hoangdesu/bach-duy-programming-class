const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const counter = document.querySelector('#counter');

let count = 0;

const updateCount = (direction) => {
    direction === 'plus' ? count++ : count--;;

    console.log('current count:', count);

    // Manually reflect the changes on the UI
    // => Imperative programming
    counter.textContent = count;
}

plus.addEventListener('click', () => updateCount('plus'));

minus.addEventListener('click', () => updateCount('minus'));