import React from "react";
import CardComponent from "../CardComponent/CardComponent.jsx";
import  "./UserHomeComponent.scss";
import AdminAllCourses from "../../Containers/AdminAllCourses/AdminAllCourses.js";

import axios from 'axios'

class UserHomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      isLoading: true,
      noCoursesAvailable: false,
      completedCourses: '',
      headerColorStandard: "#75B1A9",
      headerColorImportant: "#FA5457",
      headerColorCompleted: "#A1BE95",
    };
  }

  componentDidMount() {
    // axios.get('auth/courses')
    //   .then(res => {
    //     let courseArray = [];
    //     for (let i = res.data.length - 1; i > res.data.length - 7; i--) {
    //       let course = res.data[i];
    //       let courseObject = {
    //         is_important: course.is_important,
    //         id: course.id,
    //         title: course.title,
    //         description: course.description,
    //         link: course.link,
    //         date: course.createdAt,
    //         category_name: course.Category.category_name
    //       }
    //       courseArray.push(courseObject)

    //     }
    //     this.setState({
    //       courses: courseArray
    //     });
    //   });

    fetch('/auth/courses', {
      method: 'GET'
  })
    .then(res => {
      if(res.ok)
          return res.json()
          .then(res => {
              this.setState({
                courses: res
              })
          })
        })
    fetch('auth/completedCourses/' + this.props.profile.id, {
      method: 'GET'
    })
      .then(res => {
        if (res.ok)
          return res.json()
            .then(res => {
              let completedCoursesId = res.map(item => item.course_id)
              this.setState({
                completedCourses: completedCoursesId,
                isLoading: false
              })
            })
        else
          alert('No courses completed')
      })
}


  showCard =() =>{
    return (this.state.isLoading == false) ?
     this.state.courses.map((item, index) => {
        for (const property in this.state.categoryNames) {
          if(property === item.category_id)
          return this.state.categoryNames[property]
        }
      return (
        <CardComponent
        headerColor={item.is_important ?
          this.state.headerColorImportant
          :
          this.state.headerColorStandard}
      completedCourses={this.state.completedCourses}
      userId={this.props.profile.id}
      courseId={item.id}
      chapterCard={item.Category.category_name}
      titleCard={item.title}
      textCard={item.description}
      keywordsCard={item.keywordsCard}
      date={item.createdAt}
      admin={this.props.admin}
      link={item.link}
      i={index}
      toDelete={this.cardToDeleteFromBtn}
        />
      )
    })
    : 
    <div>
      <h2>
        Cursuri de încărcare...
      </h2>
    </div>
  }


  render() {
    console.log(this.state.completedCourses)
    console.log('user id from props: ' + this.props.profile.id)
    // console.log('names : ' + this.state.categoryNames)
    return (
      <div className='container'>
        <header className='headerContainer'>
    <h1 className='titleWelcome'>Salut {this.props.userName}</h1>
            <h2 className="subtitleWelcome">Cele mai recente cursuri</h2>
        </header>
        <main className="mainContainer">
        {this.showCard()}
        </main>
      </div>
    );
  }
}

export default UserHomeComponent;
