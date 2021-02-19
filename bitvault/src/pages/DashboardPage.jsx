import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import FlexDiv from '../components/FlexDiv';
import styled from 'styled-components';


const Container = styled(FlexDiv)`
    flex-direction: row;
    justify-content: flex-start;
`

const ContentDiv = styled(FlexDiv)`
    justify-content: space-between;
    margin-left: 250px;
    width: 100%;
    height: 100vh;
    flex-direction: column;

    @media (max-width: 992px) {
        margin-left: 0px;
    }
`

const Content = styled(FlexDiv)`
    padding-top: 100px;
    justify-content: center;
    align-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
`

const PasswordDiv = styled.div`
    min-width: 350px;
    height: 200px;
    margin: 20px 20px;
    background-color: white;
    filter: drop-shadow(0px 4px 4px #554c4c);

    @media (max-width: 992px) {
        width: 90%;
        height: 60px;
        margin: 20px 0 0 0;
    }
`



const DashboardPage = () => {
    return (
        <Container>
            <ContentDiv>
                <Content>
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                    <PasswordDiv />
                </Content>
                <NavBar />
            </ContentDiv>
            <SideBar />
        </ Container>
    )
}

export default DashboardPage;