export default function MovieCard(props) {
    const { movie: mv } = props;
    
    return (
        <div style={{ border: '1px solid red' }}>
            <img src={mv.poster} alt="" width={'200px'} />
            <p>{mv.title}</p>
            <p>genre</p>
            <p>{props.button}</p>
        </div>
    )
}