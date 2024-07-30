// @FXML id

const button = document.querySelector('#click-me');
const h6 = document.querySelector('h6');
let isOn = false;

// ->

button.addEventListener('click', () => {
    // alert('sup bro!')
    
    // toggle
    isOn = !isOn;
    
    if (isOn) {
        h6.style.color = 'purple';
        h6.textContent = 'sup bro!';
    } else {
        h6.style.color = 'pink';
        h6.textContent = 'hehe';
    }
});
