import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import RegisterLoginPage from './pages/RegisterLoginPage'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route exact path="/login">
          <RegisterLoginPage type="login"/>
        </Route>
        <Route exact path="/register">
          <RegisterLoginPage type="register"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
