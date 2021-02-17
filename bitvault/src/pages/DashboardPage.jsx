import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const ContentDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 250px;
    width: 100%;
    height: 100vh;
    flex-direction: column;

    @media (max-width: 992px) {
        margin-left: 0px;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
`

const PasswordDiv = styled.div`
    min-width: 350px;
    height: 200px;
    margin: 60px 20px;
    background-color: white;
    filter: drop-shadow(0px 4px 4px #554c4c);

`

const DashboardPage = (props) => {
    return (
        <Container>
            <ContentDiv>
                <NavBar style=""/>
                <Content >
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />



                </Content>
            </ContentDiv>
            <SideBar />
        </ Container>
    )
}

export default DashboardPage;