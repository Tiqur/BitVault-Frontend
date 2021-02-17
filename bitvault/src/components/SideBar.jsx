import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MdDashboard, MdLock, MdSettings, MdAccountCircle, MdNote, MdClose } from 'react-icons/md';
import '../index.css'


const SideDiv = styled.ul`
    margin: 0;
    list-style-type: none;
    background-color: #37474F;
    min-width: 250px;
    height: 100vh;
`

const PageContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;

    @media (max-width: 992px) {
        display: none;
    }
    @media (min-width: 993px) {
        display: flex !important;
    }
`

const BlurDiv = styled.div`
    background-color: black;
    opacity: .5;
    height: auto;
    width: 100%;

    // remove blur
    @media (min-width: 992px) {
        display: none;
    }
`

const NavLink = styled(Link)`
    display: block;
    font-family: 'Roboto';
    color: #7F9DA9;
    text-decoration: none;
    padding-left: 70px;
`


const SideElementDiv = styled.div`
    display: flex;
    padding: 18px 0 18px 0;
    justify-content: space-around;
    flex-direction: column;
    border-bottom: 2px solid #3f515a;

    &:hover {
        transition: 300ms;
        background-color: #4f616a;
        cursor: pointer;
    }
`

const PrimaryTitleDiv = styled.div`
    background-color: #32414b;
    color: #6a838c;
    font-size: x-large;
    padding: 16px 0 16px 0;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border-bottom: 2px solid #3f515a;
`


const exitSideBar = () => {
    document.getElementsByClassName("SideBarContainer")[0].style.display = "none";
}


const SideElement = (props) => {
    if (props.primary) {
        return (
            <PrimaryTitleDiv>
                <NavLink primary>BitVault</NavLink>
                <MdClose size={35} onClick={exitSideBar} className="react-icons primary-exit"/>
            </PrimaryTitleDiv>
        )
    }
    return (
        <SideElementDiv>
            <props.icon size={25} className="react-icons"/>
            <NavLink to={props.destination}>{props.children}</NavLink>
        </SideElementDiv>
    )
}


const SideBar = () => {
    return (
        <PageContainer className="SideBarContainer">
            <SideDiv>
                <SideElement primary />
                <SideElement destination="#dashboard" icon={MdDashboard}>Dashboard</SideElement>
                <SideElement destination="#passwords" icon={MdLock}>Passwords</SideElement>
                <SideElement destination="#settings" icon={MdSettings}>Settings</SideElement>
                <SideElement destination="#profile" icon={MdAccountCircle}>Profile</SideElement>
                <SideElement destination="#notes" icon={MdNote}>Notes</SideElement>
            </SideDiv>
            <BlurDiv />
        </PageContainer>
    )
}

export default SideBar;