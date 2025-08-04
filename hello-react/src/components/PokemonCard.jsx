import '../pokemon.css';

export default function PokemonCardComponent(props) {
    const { pokemon } = props;

    // helper function
    const toTitleCase = (name) => {
        return name[0].toUpperCase() + name.slice(1);
    }

    return (
        <div className="pokemon-card">
            <img src={pokemon.sprite} alt="" />
            <p>#{pokemon.id}</p>
            <p>{toTitleCase(pokemon.name)}</p>
        </div>
    )

}
