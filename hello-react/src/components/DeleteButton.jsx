import styled from "styled-components"

const DeleteButton = styled`
    /* background-color: red;
    color: white; */

    background-color: ${props => props.darkmode ? "brown" : "red"};
    color: ${props => props.darkmode ? "yellow" : "white"};
    transition: 0.2s all ease;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

// export default function DeleteButton({ children }) {
//     return <StyledButton>{children}</StyledButton>;
// }


export default DeleteButton;
