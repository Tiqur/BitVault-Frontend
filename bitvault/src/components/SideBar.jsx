import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MdDashboard, MdLock, MdSettings, MdAccountCircle, MdNote } from 'react-icons/md';
import Hamburger from 'hamburger-react'
import '../index.css'


const SideDiv = styled.ul`
    margin: 0;
    list-style-type: none;
    background-color: #37474F;
    width: 70%;
    height: 100vh;
`

const PageContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
`

const BlurDiv = styled.div`
    background-color: black;
    opacity: .5;
    height: auto;
    width: 30%;
`

const NavLink = styled(Link)`
    display: block;
    font-family: 'Roboto';
    color: #7F9DA9;
    text-decoration: none;
    padding-left: 70px;

    ${props => props.primary && css`
        background-color: #32414b;
        text-align: center;
        color: #6a838c;
        font-size: x-large;
        padding: 28px 0 28px 0;
        font-weight: bold;
    `}
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


const SideElement = (props) => {
    return (
        <SideElementDiv>
            <props.icon size={25} className="react-icons"/>
            <NavLink to={props.destination}>{props.children}</NavLink>
        </SideElementDiv>
    )
}




const SideBar = () => {
    return (
        <PageContainer>
            <SideDiv>
                <Hamburger></Hamburger>
                <NavLink to="#home" primary>BitVault</NavLink>
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