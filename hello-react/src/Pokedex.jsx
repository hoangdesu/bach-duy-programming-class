import { useEffect, useState } from "react"

// PokemonCard component uses default export
// -> we can import under any name
import PKMCard from "./components/PokemonCard";

import './pokemon.css';

const QUERY = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0';

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
                .then(async (data) => {
                    console.log(data);
                    const { results } = data;

                    
                    // setTimeout(() => {
                    // }, 3000);

                    // setPokemons(pokemonList);
                    // setIsLoading(false);
                    
                    console.log(results);

                    const pokemonList = [];

                    // results.forEach(pkm => {
                    //     const fetchData = async (pkm) => {
                    //         try {
                    //             const pokemonDetailResponse = await fetch(pkm.url);
                    //             const pokemonDetailData = await pokemonDetailResponse.json();
                    //             // console.log('> result for:', pkm.name);
                    //             // console.log('> pokemonDetailData:', pokemonDetailData);
                    //             pokemonList.push(pokemonDetailData.name)

                    //         } catch (err) {
                    //             console.log(err);
                                
                    //         }
                    //     }

                    //     fetchData(pkm);
                        
                    // });

                    for (const pkm of results) {
                        try {
                            const pokemonDetailResponse = await fetch(pkm.url);
                            const pokemonDetailData = await pokemonDetailResponse.json();
                            // console.log('> result for:', pkm.name);
                            // console.log('> pokemonDetailData:', pokemonDetailData);
                            const pokemonObject = {
                                id: pokemonDetailData.id,
                                name: pokemonDetailData.name,
                                sprite: pokemonDetailData['sprites']['other']['official-artwork']['front_default'],
                                types: []
                            }
                            pokemonList.push(pokemonObject);

                            
                        } catch (err) {
                            console.log(err);   
                        }
                    }

                    console.log('pokemonlist: ', pokemonList);
                    setPokemons(pokemonList);
                    setIsLoading(false);
                    
                })
                .catch(err => {
                    console.log('network error');
                    setFailed(true);
                    setIsLoading(false);
                });
        }, 0);
        
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

            {!isLoading && pokemons.length > 0 && (
                <div className="pokemon-grid">
                    {pokemons.map(pkm => <PKMCard key={pkm.name} pokemon={pkm} />)}
                </div>
            )}
        </>
    )
}