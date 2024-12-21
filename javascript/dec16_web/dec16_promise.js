// const data = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
// console.log(data); Promise<pending>

const name = document.querySelector('#name');
const image = document.querySelector('#image')

let pokemon;
// Chaining promises
fetch('https://pokeapi.co/api/v2/pokemon/129')
    .then((res) => {
        // console.log(res);
        return res.json();
    })
    .then(data => {
        console.log(data);
        pokemon = data;

        // fetch('https://pokeapi.co/api/v2/pokemon/name/image')
        //     .then(res => res.json())
        //     .then(data => {
        //         image.src = data.sprites.front_default;
        //     })

        name.textContent = data.name
        image.src = data.sprites.front_default;
    })
    .catch(err => {
        console.log('in catch block');
        console.error(err);  
    });


text.textContent = data.pokemon
console.log('outside:', data);

// setTimeout(() => {
//     name.textContent = pokemon.name
//     image.src = pokemon.sprites.front_default;
// }, 1000);

