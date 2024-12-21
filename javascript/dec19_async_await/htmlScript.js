const pokemonName = document.querySelector('#name');
const img = document.querySelector('#img');
const searchBoxForm = document.querySelector('#search-box');

const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

searchBoxForm.addEventListener('submit', e => {
    // prevent the form from submitting and reloading the page
    e.preventDefault();


    // extract the value from the input field inside the form
    const pokemonQuery = searchBoxForm.pokemonName.value;
    console.log(pokemonQuery);
    

    // Promises chaining: .then().then()
    // perform a manual fetch to poke API with the value from the input
    fetch(`${API_ENDPOINT}/${pokemonQuery}`)
    // .then(res => {
        //     // res: is ok or not
        //     return res.json();
        // })
        .then(res => res.json())
        .then(pokemon => {
            // assign data to corresonping html values
            pokemonName.textContent = pokemon.name;
            img.src = pokemon.sprites.front_default;
        })
        .catch(e => {
            img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12ecb7ae-7059-48df-a4f8-2e3fb7858606/d47rmjf-de88a574-49c8-4dcf-9df4-7e11722e8bec.png/v1/fill/w_454,h_340,q_80,strp/who_s_that_pokemon__by_amitlu89_d47rmjf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQwIiwicGF0aCI6IlwvZlwvMTJlY2I3YWUtNzA1OS00OGRmLWE0ZjgtMmUzZmI3ODU4NjA2XC9kNDdybWpmLWRlODhhNTc0LTQ5YzgtNGRjZi05ZGY0LTdlMTE3MjJlOGJlYy5wbmciLCJ3aWR0aCI6Ijw9NDU0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Gg82YjPgXVwCwe3b1FVZnPvC8UtnL37AG9AqdPVzz50';
            pokemonName.textContent = 'Pokemon not found';

        });

    // reset the input
    searchBoxForm.pokemonName.value = '';

})

