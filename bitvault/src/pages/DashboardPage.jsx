import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import FlexDiv from '../components/FlexDiv';
import Text from '../components/Text';
import AddComponent from '../components/AddComponent';
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

    @media (max-width: 991px) {
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

const PasswordDiv = styled(FlexDiv)`
    min-width: 350px;
    height: 200px;
    margin: 20px 20px;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    filter: drop-shadow(0px 3px 3px #554c4c);

    @media (max-width: 991px) {
        flex-direction: row;
        width: 90%;
        height: 60px;
        margin: 20px 0 0 0;
    }

    &:hover {
        transition: all .1s ease-in-out;
        transform: scale(1.015);
        cursor: pointer;
    }
`


const PassDivLogo = styled.img`
    width: 40px;
    src: ${props => props.src};
    background-color: white;
    
    @media (min-width: 991px) {
        padding-bottom: 10px;
        width: 100px;
    }
`


const Password = (props) => {
    return (
        <PasswordDiv>
            <PassDivLogo src={`https://logo.clearbit.com/${props.url}?size=200`} />
            <Text color="#2079b8" weight="bold" size="150%">{props.name}</Text>
            <Text>{props.username}</Text>
        </PasswordDiv>
    )
}



const DashboardPage = () => {
    return (
        <Container>
            <ContentDiv>
                <Content>
                    <Password url="binance.com" name="Binance" username="TestEmail@gmail.com" password="sss" />
                    <Password url="gmail.com" name="Gmail" username="TestEmail@gmail.com" password="sss" />
                    <Password url="razer.com" name="Razer" username="TestEmail@gmail.com" password="sss" />
                    <Password url="skittles.com" name="Skittles" username="TestEmail@gmail.com" password="sss" />
                    <Password url="target.com" name="Target" username="TestEmail@gmail.com" password="sss" />
                    <Password url="wacom.com" name="Wacom" username="TestEmail@gmail.com" password="sss" />
                    {/* <a href="https://clearbit.com">Logos provided by Clearbit</a> */}
                    <AddComponent />
                </Content>
                <NavBar />
            </ContentDiv>
            <SideBar />
        </ Container>
    )
}

export default DashboardPage;