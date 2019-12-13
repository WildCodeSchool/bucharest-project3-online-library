import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import CourseModal from './Components/CourseModal/CourseModal';
// import PersonalProfile from './Components/PersonalProfile/PersonalProfile';
// import ProfileCourseCard from'./Components/ProfileCourseCard/ProfileCourseCard'


// const courses=[
//   {chapterTitle:'Psiho',
//     courseTitle:'Cum sa..',
//   courseLink:'http//.dasdadasdfa' },
//   {chapterTitle:'Da',
//   courseTitle:'Cum sa..',
// courseLink:'http//.dasdadasdfdsadasrewtre241324a' }
//     ]

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     <CourseModal/>
     {/* <PersonalProfile/> */}

  {/* {courses.map((item,i)=>{
    return <ProfileCourseCard {...item} key={i}/>
  })} */}

     
    </div>
  );
}

export default App;
