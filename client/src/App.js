import React from 'react';

import './App.css';
import '../src/Components/UserHomeComponent/UserHomeComponent';

import LoginPageComplete from '../src/Components/LoginPageComplete/LoginPageComplete'
import UserHomePageComplete from '../src/Components/UserHomePageComplete/UserHomePageComplete'
import SignUpPageComplete from '../src/Components/SignUpPageComplete/SignUpPageComplete';


import { Switch, Route } from 'react-router-dom';

const Home='';
const Courses='';
const Profile='';
// const SignUpPage='';
// const LoginPage='';
// const UserHomePage='';

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
          {/* <Route path='/signUpPage' component={SignUpPageComplete}/> */}
        </Switch>
        {/* <LoginPageComplete/> */}
        <SignUpPageComplete/>
          {/* <UserHomePageComplete/> */}
        {/* <UserHomeComponent userName = {this.state.userName}/> */}
      </React.Fragment>
    );
  }
}

export default App;
