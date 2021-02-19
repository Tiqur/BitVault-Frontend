import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import FlexDiv from '../components/FlexDiv';


const NavDiv = styled(FlexDiv)`
    position: fixed;
    width: 100%;
    background-color: #2E47CB;
    min-height: 60px;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(-1px 1px 1px #000000);
`


const SearchDiv = styled(FlexDiv)`
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

const Title = styled(Link)`
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 130%;
    color: white;

    @media (min-width: 992px) {
        display: none;
    }
`

const openNav = () => {
    document.getElementsByClassName("SideBarContainer")[0].style.display = "flex";
}

const NavBar = () => {
    return (
        <NavDiv>
            <MdMenu onClick={openNav} />
            <Title>BitVault</Title>
            {/* Only for Desktop */}
            {/* <SearchDiv>
                <SearchBox />
            </SearchDiv> */}
        </NavDiv>
    )
}

export default NavBar;