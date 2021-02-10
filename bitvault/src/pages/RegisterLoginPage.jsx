import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    body {
        background-color: #25333D;
    }
`

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    margin-top: 50%;
`

const AuthInputBox = styled.input`
    background-color: #25333D;
    border: 1px solid #697279;
    color: #838f97;
    margin-bottom: 40px;
    border-radius: 8px;
    font-size: 20px;
    padding: 25px;
    transition: 300ms;

    &:hover {
        border-color: #2D92DB;
    }

    &:focus {
        border-color: #2D92DB;
        outline: none;
    }
`

const Button = styled.button`
    background-color: #2D92DB;
    border-radius: 8px;
    color: #D4D4D4;
    font-size: 20px;
    padding: 25px;
    border: none;
    margin-top: 10px;
    transition: 300ms;
    cursor: pointer;
    
    &:hover {
        background-color: #2079b8;
    } 

    &:focus {
        outline: 1px solid white;
    }
`

const DividerLine = styled.div`
    background-color: #697279;
    margin-bottom: 20%;
    height: 1px;
`


const RegisterLoginPage = (props) => {
    const type = props.type;
    let comp;

    switch(type) {
        case "register":
               comp = <>
                <GlobalStyle />
                <Container>
                    <DividerLine></DividerLine>
                    <AuthInputBox type="text" name="uname" placeholder="Username"/>
                    <AuthInputBox type="text" name="email" placeholder="Email"/>
                    <AuthInputBox type="password" name="password1" placeholder="Password"/>
                    <AuthInputBox type="password" name="password2" placeholder="Confirm password"/>      
                    <Button>Register</Button>      
                </Container>
                </>
            break;
        case "login":
               comp = <>
                <GlobalStyle />
                <Container>
                    <DividerLine></DividerLine>
                    <AuthInputBox type="text" name="uname" placeholder="Username or Email"/>
                    <AuthInputBox type="password" name="password" placeholder="Password"/>
                    <Button>Login</Button>      
                </Container>
                </>
            break;
    }
    return comp;
}


export default RegisterLoginPage;
