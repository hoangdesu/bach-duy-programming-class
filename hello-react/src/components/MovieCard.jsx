import { useState } from "react";

export default function MovieCard(props) {
    const { movie: mv, ranking, onDelete } = props;

    // inner state: every state is separated
    const [clicked, setClicked] = useState(false);

    // let clicked = false;

    console.log('MovieCard re-renders');
    
    
    return (
        <div 
            style={{ border: `2px solid ${clicked ? 'red' : 'black'}`, position: 'relative', padding: '8px' }} 
            onClick={() => setClicked(!clicked)}
        >
            <button 
                style={{ position: 'absolute', top: '5px', right: '5px' }}
                onClick={onDelete}
            >
                x
            </button>
            <img src={mv.poster} alt="" width={'200px'} />
            <p>{ranking}. {mv.title}</p>
            <p>genre</p>
            <p>{props.button}</p>
        </div>
    )
}