export default function PokemonCardComponent(props) {
    const { pokemon } = props;

    return (
        <div>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprite} alt="" />
        </div>
    )

}
