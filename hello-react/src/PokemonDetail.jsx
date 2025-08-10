import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import { toTitleCase as toTitleCaseFunction } from "./helpers/main";


export default function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    console.log(name);

    // cache this function, so that it will NOT be re-created on every re-render
    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const pokemonDetailData = await res.json();
            // console.log(pokemonDetailData);

            const pokemonObject = {
              id: pokemonDetailData.id,
              name: pokemonDetailData.name,
              sprite:
                pokemonDetailData['sprites']['other']['official-artwork'][
                  'front_default'
                ],
              types: [],
            };

            setPokemon(pokemonObject);
            
        } catch (err) {
            console.error(err);
            
        }
    }, [name]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (!pokemon) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
            <Link to='/pokedex'>Back to Home</Link>
            <h1>{toTitleCaseFunction(pokemon.name)}</h1>
            <img src={pokemon.sprite} alt="" />
            <p>#{pokemon.id}</p>
            <p></p>
        </>
    )
}