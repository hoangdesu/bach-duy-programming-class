// import './MyButton.css';

import btnStyle from './MyButton.module.css';

export default function MyButton(props) {
    // const { text, onClick } = props;

    console.log('buttonchildren:', props.children);

    // Inheritance: kế thừa
    
    return (
        <button className={btnStyle['pkm-btn']} {...props}>
            {props.children}
        </button>
    )
}