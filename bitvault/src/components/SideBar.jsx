import styled from 'styled-components';
import { Link } from 'react-router-dom';


const SideDiv = styled.ul`
    margin: 0;
    list-style-type: none;
    background-color: #37474F;
    width: 70%;
    height: 100vh;
`

const PageContainer = styled.div`
    display: flex;
`

const BlurDiv = styled.div`
    background-color: black;
    opacity: .5;
    height: auto;
    width: 30%;
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
    font-family: 'Roboto';
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
        <PageContainer>
            <SideDiv>
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
                <NavLink to="#home">Dashboard</NavLink>
                <NavLink to="#home">Passwords</NavLink>
                <NavLink to="#home">Settings</NavLink>
                <NavLink to="#home">Profile</NavLink>
                <NavLink to="#home">Notes</NavLink>
            </SideDiv>
            <BlurDiv />
        </PageContainer>
    )
}

export default SideBar;