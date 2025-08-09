import { useEffect, useState } from 'react';
import '../pokemon.css';

export default function PokemonCardComponent(props) {
    const { pokemon, onPokemonClicked } = props;

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
        <div
            className={`pokemon-card ${selected && 'pokemon-card-selected'}`} 
            onClick={onPokemonSelected}
            onDelete
        >
            <img src={pokemon.sprite} alt="" />
            <p>#{pokemon.id}</p>
            <p>{toTitleCase(pokemon.name)}</p>
        </div>
    )

}
