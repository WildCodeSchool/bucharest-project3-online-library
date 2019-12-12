import React from 'react';

import './App.css';

import Navbar from './Components/NavbarComponent/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

import { Switch, Route } from 'react-router-dom';

const Home='';
const Courses='';
const Profile='';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Navbar />
      <Login/>
      <Footer />
    </div>
  );
}

export default App;
