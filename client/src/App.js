import React from 'react';

import './App.css';
import '../src/Components/UserHomeComponent/UserHomeComponent';

import Navbar from './Components/NavbarComponent/Navbar'
import LoginPageComplete from '../src/Components/LoginPageComplete/LoginPageComplete';
import UserHomePageComplete from '../src/Containers/UserHomePageComplete/UserHomePageComplete';
import SignUpPageComplete from '../src/Components/SignUpPageComplete/SignUpPageComplete';
import PersonalProfilePageComplete from './Containers/PersonalProfilePageComplete/PersonalProfilePageComplete';
import AdminAllCourses from './Containers/AdminAllCourses/AdminAllCourses'

import { Switch, Route } from 'react-router-dom';
import AllUsersTable from './Components/AllUsersTable/AllUsersTable';
import { connect} from 'react-redux'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fafacebook } from '@fortawesome/free-brands-svg-icons';

// library.add(fab,fafacebook)


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user: this.props.auth
    }
  }
  render() {
    console.log(this.props.auth.access_level)
      const user = localStorage.getItem('user')
      const userName = localStorage.getItem('userName')
      const userToken = localStorage.getItem('userToken')
      console.log('user firstname from localStorage : '+userName)
      console.log('user token from localStorage : '+userToken)


    return (
      <React.Fragment>

        <Switch>
          <Route exact path="/" component={LoginPageComplete} home={true}/>
          <Route path="/creareCont" component={SignUpPageComplete} home={true}/>
          <Route path="/acasa" render={ () => <UserHomePageComplete admin={this.props.auth.access_level} /> } />
          <Route path='/cursuri' render={ () => <AdminAllCourses admin={this.props.auth.access_level} /> } />
          <Route path="/profil" render={ () => <PersonalProfilePageComplete admin={this.props.auth.access_level} /> } /> 
          <Route path="/utilizatorii" render={ () => < AllUsersTable admin={this.props.auth.access_level} /> } /> 
        </Switch>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps) (App);
