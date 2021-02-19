import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import FlexDiv from '../components/FlexDiv';

const NavDiv = styled(FlexDiv)`
    position: fixed;
    width: 100%;
    background-color: #2E47CB;
    min-height: 60px;
    align-items: center;
    filter: drop-shadow(-1px 1px 1px #000000);
`


const SearchDiv = styled(FlexDiv)`
    background-color: #677EF8;
    width: 40%;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin-left: 150px;

    @media (max-width: 991px) {
        display: none;
    }
`


const SearchBox = styled.input`
    border: none;
    background-color: #677EF8;
    width: 83%;
    height: 40px;
    color: #c0cafa;


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
const TextLink = styled(Link)`
    font-size: ${props => props.large ? 'medium' : 'small'};
    color: #dce1fa;
    text-decoration: none;
    font-family: 'Roboto';
    text-overflow: ellipsis;
`

const LoggedInContainer = styled(FlexDiv)`
    display: flex;
    flex-direction: column;
    width: 350px;
    position: absolute;
    right: 110px;
`


const LoggedInBox = (props) => {
    return (
        <LoggedInContainer>
            <TextLink>Logged in as: </TextLink>
            <TextLink large>{props.children}</TextLink>
        </LoggedInContainer>
    )
}


const openNav = () => {
    document.getElementsByClassName("SideBarContainer")[0].style.display = "flex";
}

const NavBar = () => {
    const email = "TestEmail@gmail.com";
    return (
        <NavDiv>
            <MdMenu size={45} onClick={openNav} className="primary-exit"/>
            <Title>BitVault</Title>
            {/* Only for Desktop */}
            <SearchDiv>
                <SearchBox />
            </SearchDiv>
            <LoggedInBox>{email}</LoggedInBox>
        </NavDiv>
    )
}

export default NavBar;