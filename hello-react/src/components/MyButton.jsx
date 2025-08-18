export default function MyButton(props) {
    // const { text, onClick } = props;

    console.log('buttonchildren:', props.children);

    // Inheritance: kế thừa
    
    return (
        <button style={{ background: 'red', color: 'white', borderRadius: '16px' }} {...props}>
            {props.children}
        </button>
    )
}