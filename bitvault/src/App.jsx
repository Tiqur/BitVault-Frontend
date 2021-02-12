import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import RegisterLoginPage from './pages/RegisterLoginPage';
import DashboardPage from './pages/DashboardPage';


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
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
