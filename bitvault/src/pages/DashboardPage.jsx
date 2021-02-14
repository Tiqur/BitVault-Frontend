import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
`

const openNav = () => {
    document.getElementsByClassName("SideBarContainer")[0].style.opacity = "100%";
}

const closeNav = () => {
    document.getElementsByClassName("SideBarContainer")[0].style.opacity = "0%";
}

const DashboardPage = (props) => {
    return (
        <Container>
            <NavBar />
            <SideBar />
            <Hamburger onToggle={toggled => toggled ? closeNav() : openNav()}></Hamburger>
        </ Container>
    )
}

export default DashboardPage;