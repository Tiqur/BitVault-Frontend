import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SideDiv = styled.ul`
    margin: 0;
    list-style-type: none;
    background-color: #37474F;
    width: 16%;
    height: 100vh;
`

const SideElement = styled.li`
    padding: 18px 0 18px 0;
    border-bottom: 2px solid #3F515A;

    &:hover {
        transition: 300ms;
        background-color: #4f616a;
        cursor: pointer;
    }
`

const ElementLink = styled(Link)`
    display: block;
    text-align: center;
    color: #7F9DA9;
    text-decoration: none;
`


const NavLink = (props) => {
    return (
        <SideElement>
            <ElementLink to={props.to}>{props.children}</ElementLink>
        </SideElement>
    );
}




const SideBar = (props) => {
    return (
        <SideDiv>
            <NavLink to="#home">Dashboard</NavLink>
            <NavLink to="#home">Passwords</NavLink>
            <NavLink to="#home">Settings</NavLink>
            <NavLink to="#home">Profile</NavLink>
            <NavLink to="#home">Notes</NavLink>
        </SideDiv>
    )
}

export default SideBar;