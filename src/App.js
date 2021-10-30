//Chargement de dépendances et style
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
//Import de composants
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import UserPosts from './Components/UserPosts/UserPosts';
import UserPage from './Components/UserPage/UserPage';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import LoginPage from './Components/LoginPage/LoginPage';
import Footer from './Components/Footer/Footer';
import Contact from './Components/contact/contact';
import RGPD from './Components/RGPD/RGPD';

function App() {
  //State global pour savoir si l'utilisateur est co
  const [isLog, setIsLog] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar isLog={isLog} setIsLog={setIsLog} />
        <Switch>
          <Route exact path="/">
            <Home isLog={isLog} />
          </Route>
          <Route path="/userposts">
            <UserPosts />
          </Route>
          <Route path="/userpage">
            <UserPage />
          </Route>
          <Route path="/createaccount">
            <CreateAccount />
          </Route>
          <Route path="/login">
            <LoginPage isLog={isLog} setIsLog={setIsLog} />
          </Route>
          <Route path="/RGPD">
            <RGPD />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
