import './App.scss';
import Main from 'pages/main';
import LandingPage from 'pages/landingPage';
import LoginPage from 'pages/loginPage'
import SignupPage from 'pages/signupPage';
import All from 'pages/all';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/all">
            <All />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
