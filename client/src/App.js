import React from 'react';

import './App.css';
import '../src/Components/UserHomeComponent/UserHomeComponent';

import Navbar from './Components/NavbarComponent/Navbar'
import LoginPageComplete from '../src/Components/LoginPageComplete/LoginPageComplete';
import UserHomePageComplete from '../src/Containers/UserHomePageComplete/UserHomePageComplete';
import SignUpPageComplete from '../src/Components/SignUpPageComplete/SignUpPageComplete';
import PersonalProfilePageComplete from './Containers/PersonalProfilePageComplete/PersonalProfilePageComplete';
import AdminAllCourses from './Containers/AdminAllCourses/AdminAllCourses';
import ResetPassord from './Components/ResetPassword/ressetPassword'

import { Switch, Route } from 'react-router-dom';
import AllUsersTable from './Components/AllUsersTable/AllUsersTable';
import RessetPassword from './Components/ResetPassword/ressetPassword';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { fafacebook } from '@fortawesome/free-brands-svg-icons';

// library.add(fab,fafacebook)


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      admin: true
    }
  }
  render() {
    return (
      <React.Fragment>

        <Switch>
          <Route exact path="/" component={LoginPageComplete} home={true}/>
          <Route path="/creareCont" component={SignUpPageComplete} home={true}/>
          <Route path="/resetPassword" component={RessetPassword} home={true}/>
          <Route path="/acasa" render={ () => <UserHomePageComplete admin={this.state.admin} /> } />
          <Route path='/cursuri' render={ () => <AdminAllCourses admin={this.state.admin} /> } />
          <Route path="/profil" render={ () => <PersonalProfilePageComplete admin={this.state.admin} /> } /> 
          <Route path="/utilizatorii" render={ () => < AllUsersTable admin={this.state.admin} /> } /> 
        </Switch>

      </React.Fragment>
    )
  }
}

// const Home = '';
// const Courses = '';
// const Profile = '';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { ModalOpen: false }
//   }
//   HandleModal = () => {
//     this.setState({ ModalOpen: true })

//   }
//   render() {
//     console.log(this.state.ModalOpen);
//     return (
//       <div>
//         <button onClick={this.HandleModal} id="myBtn">Completed</button>
//         <CompletedComp OpenModal={this.state.ModalOpen}>

//         </CompletedComp>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/courses" component={Courses} />
//           <Route path="/profile" component={Profile} />
//         </Switch>
//         <Navbar />
//         <Footer />

//       </div>
//     );
//   }
// }

export default App;
