import React from 'react';

import './App.css';
import '../src/Components/UserHomeComponent/UserHomeComponent';

import Navbar from './Components/NavbarComponent/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import UserHomeComponent from '../src/Components/UserHomeComponent/UserHomeComponent';

import { Switch, Route } from 'react-router-dom';

const Home='';
const Courses='';
const Profile='';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Ana'
    };
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Navbar />
        {/* <Login/> */}
        <UserHomeComponent userName = {this.state.userName}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
