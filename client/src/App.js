import React from 'react';
import './App.css';
import Navbar from './components/NavbarComponent/Navbar';
import AdminAllCourses from './components/AdminAllCourses/AdminAllCourses'
import { Switch, Route } from 'react-router-dom';
import './App.css';

const Home='';
const Courses='';
const Profile='';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      admin: true
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <AdminAllCourses admin={this.state.admin} />
      </div>
    );
  }
}

export default App;
