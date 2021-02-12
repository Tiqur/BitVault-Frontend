import styled from 'styled-components';
import { Link } from 'react-router-dom';



const NavDiv = styled.div`
    display: flex;
    background-color: blue;
    height: 60px;
    justify-content: center;
    align-items: center;
`


const SearchDiv = styled.div`
    display: flex;
    background-color: #677EF8;
    width: 40%;
    height: 40px;
    justify-content: center;
    align-items: center;
`


const SearchBox = styled.input`
    border: none;
    background-color: red;
    width: 83%;
    height: 40px;


    &:focus {
        outline: none;
    }

`

const NavBar = (props) => {
    return (
        <NavDiv>
            {/* Only for Desktop */}
            {/* <SearchDiv>
                <SearchBox />
            </SearchDiv> */}
        </NavDiv>
    )
}

export default NavBar;