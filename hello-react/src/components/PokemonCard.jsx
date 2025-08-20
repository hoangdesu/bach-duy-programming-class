import { useEffect, useState } from 'react';
import '../pokemon.css';
import { Link, useLocation } from 'react-router';

export default function PokemonCardComponent(props) {
    const { pokemon, onPokemonClicked } = props;

    const location = useLocation(); // extract current pathname

    // console.log('location:', location);
    

    const [selected, setSelected] = useState(false);

    // helper function
    const toTitleCase = (name) => {
        return name[0].toUpperCase() + name.slice(1);
    }

    // calling function onPokemonClickedHandler from parent through props onPokemonClicked
    // lifting the state up
    const onPokemonSelected = () => {
        setSelected(!selected)
    }
    
    useEffect(() => {
        onPokemonClicked(pokemon, selected);
    }, [selected]);
    

    return (
        // <div
        //     className={`pokemon-card ${selected && 'pokemon-card-selected'}`} 
        //     onClick={onPokemonSelected}
        // >

        <Link 
            to={`/pokedex/${pokemon.id}`} 
            className="pokemon-card" 
        >
            <img src={pokemon.sprite} alt="" />
            <p>#{pokemon.id}</p>
            <p>{toTitleCase(pokemon.name)}</p>
        </Link>
        // </div>
    )

}
