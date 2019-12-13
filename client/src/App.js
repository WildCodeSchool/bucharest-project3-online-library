import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
// import './Components/Login/Login.css';
import CourseModal from './Components/CourseModal/CourseModal';
// import './Components/CourseModal/CourseModal.css';
import PersonalProfile from './Components/PersonalProfile/PersonalProfile';
import './Components/PersonalProfile/PersonalProfile.css'

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <CourseModal/> */}
     <PersonalProfile/>
    </div>
  );
}

export default App;
