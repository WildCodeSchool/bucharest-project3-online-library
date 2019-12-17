import React from 'react';

import './App.css';
import '../src/Components/UserHomeComponent/UserHomeComponent';

import LoginPageComplete from '../src/Components/LoginPageComplete/LoginPageComplete';
import UserHomePageComplete from '../src/Components/UserHomePageComplete/UserHomePageComplete';
import SignUpPageComplete from '../src/Components/SignUpPageComplete/SignUpPageComplete';
import PersonalProfilePageComplete from './Components/PersonalProfilePageComplete/PersonalProfilePageComplete';
import AdminAllCourses from './Components/AdminAllCourses/AdminAllCourses'

import { Switch, Route } from 'react-router-dom';
import AllUsersTable from './Components/AllUsersTable/AllUsersTable';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LoginPageComplete} />
          <Route path="/creareCont" component={SignUpPageComplete} />
          <Route path="/acasa" render={ () => <UserHomePageComplete admin={true} /> } />
          <Route path='/cursuri' render={ () => <AdminAllCourses admin={true} /> } />
          <Route path="/profil" render={ () => <PersonalProfilePageComplete admin={true} /> } /> 
          <Route path="/utilizatorii" render={ () => < AllUsersTable admin={true} /> } /> 
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
