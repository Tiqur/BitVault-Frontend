import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
import FlexDiv from './FlexDiv';


const Circle = styled(FlexDiv)`
    position: fixed;
    justify-content: center;
    align-items: center;
    background-color: #2E47CB;
    border-radius: 50%;
    height: 3em;
    width: 3em;
    left: 100vw;
    top: 100vh;
    transform: translate(-150%, -150%);
    filter: drop-shadow(0px 2px 2px #554c4c);

    &:hover {
        transition: all .20s ease-in-out;
        transform: translate(-150%, -150%) scale(1.045);
        cursor: pointer;
    }
`

const AddSymbol = styled(MdAdd)`
    position: absolute;
    color: white;
    
`

const AddComponent = () => {
    return (
        <Circle>
            <AddSymbol size={30} />
        </Circle>
    )
}

export default AddComponent;