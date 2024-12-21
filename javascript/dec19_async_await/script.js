// Xử lý promise bằng syntax async-await

async function fetchPokemon() {
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     // console.log(data);
    // });


    let pokemon;

    try {
        // 1. fetch data
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachuu')
        // console.log('res', res);

        // 2. extract data from body
        const data = await res.json();
        console.log(data);

        console.log(data.name);

        pokemon = data;
    
    } catch (e) {
        console.log('wrong');
   }

    console.log(pokemon);
    
    
}


// # main

fetchPokemon();
console.log('after calling fetch');

