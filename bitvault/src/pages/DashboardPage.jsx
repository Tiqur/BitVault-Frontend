import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
`

const DashboardPage = (props) => {
    return (
        <Container>
            <NavBar />
            <SideBar />
        </ Container>
    )
}

export default DashboardPage;