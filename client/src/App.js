import React from 'react';
import Filter from './components/filter/filter';
import './App.css';
import Navbar from './components/NavbarComponent/Navbar';
import AdminAllCourses from './components/AdminAllCourses/AdminAllCourses'
import { Switch, Route } from 'react-router-dom';
import './App.css';

const Home='';
const Courses='';
const Profile='';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <AdminAllCourses />
    </div>
  );
}

export default App;
