import { useEffect, useState } from "react"

// PokemonCard component uses default export
// -> we can import under any name
import PKMCard from "./components/PokemonCard";

const QUERY = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [failed, setFailed] = useState(false);

    
    // Put fetch inside a useEffect to fetch data on initial render only
    useEffect(() => {
        // console.log('fetching pokemons...');

        // before fetching the data
        setIsLoading(true);

        // Artificial delay
        setTimeout(() => {
            // Fetch API
            fetch(QUERY)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const { results: pokemonList } = data;

                    
                    // setTimeout(() => {
                    // }, 3000);

                    setPokemons(pokemonList);
                    setIsLoading(false);
                    
                    // console.log(pokemonList);
                    
                })
                .catch(err => {
                    console.log('network error');
                    setFailed(true);
                    setIsLoading(false);
                });
        }, 3000);
        
    }, []);


    // must use useEffect to wait for pokemons state finish updating
    useEffect(() => {
        console.log(pokemons);
    }, [pokemons])
    
    // console.log('Render Pokedex');

    // Handle loading state using early return
    // if (isLoading) {
    //     return (
    //         <div>Loading pokemons...</div>
    //     )
    // }

    // pokemons[] -> pokemon = {
    //     name: '',
    //     url: '',
    //     sprite: '.img'
    // }

    return (
        <>
            <h1>Pokédex</h1>

            {isLoading && (
                <div>Loading...</div>
            )}

            {failed && (
                <div>Fetch failed {":("}</div>
            )}

            {!isLoading && (
                <div>
                    {pokemons.map(pkm => <PKMCard key={pkm.name} pokemon={pkm} />)}
                </div>
            )}
        </>
    )
}