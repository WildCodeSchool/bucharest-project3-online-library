import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import CourseModal from './Components/CourseModal/CourseModal';
import './Components/Login/Login.css';
import './Components/CourseModal/CourseModal.css';

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     <CourseModal/>
    </div>
  );
}

export default App;
