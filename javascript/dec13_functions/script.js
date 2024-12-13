const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    console.log(event);
    alert('Suppp');

    event.stopPropagation();
});


window.addEventListener('click', (event) => {
    console.log(event);
    alert(`Clicked on window: X=${event.x} - Y=${event.y}`);
});