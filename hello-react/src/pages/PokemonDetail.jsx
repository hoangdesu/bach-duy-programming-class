import { use, useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import { toTitleCase as toTitleCaseFunction } from "../helpers/main";
import AppContext from "../store/AppContext";
import MyButton from "../components/MyButton";

export default function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    const { favorites, setFavorites } = use(AppContext);

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

            console.log(pokemonObject);
            

            setPokemon(pokemonObject);
            
        } catch (err) {
            console.error(err);
            
        }
    }, [name]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const onAddToFavorite = () => {
        setFavorites([...favorites, pokemon])
    };

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
            <MyButton onClick={onAddToFavorite} text="ADDDDDD">Add to favorites</MyButton>
        </>
    )
}