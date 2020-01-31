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
      // userId: this.props.auth.id,
      noCoursesAvailable: false,
      completedCourses: '',
      headerColorStandard: "#75B1A9",
      headerColorImportant: "#FA5457",
      headerColorCompleted: "#A1BE95",
    };
  }

  componentDidMount() {
    axios.get('auth/courses')
      .then(res => {
        let courseArray = [];
        for (let i = res.data.length - 1; i > res.data.length - 7; i--) {
          let course = res.data[i];
          let courseObject = {
            is_important: course.is_important,
            id: course.id,
            title: course.title,
            description: course.description,
            link: course.link,
            date: course.createdAt,
            category_id: course.category_id
          }
          courseArray.push(courseObject)

        }
        this.setState({
          courses: courseArray
        });
      });

    fetch('auth/completedCourses/' + this.state.userId, {
      method: 'GET'
    })
      .then(res => {
        if (res.ok)
          return res.json()
            .then(res => {
              let completedCoursesId = res.map(item => item.course_id)
              this.setState({
                completedCourses: completedCoursesId
              })
            })
        else
          alert('No courses completed')
      })
  }

  showCard =() =>{
    return this.state.courses.map((item, index) => {
      return (
        <CardComponent 
        headerColor={item.is_important ?
          this.state.headerColorImportant
          :
          this.state.headerColorStandard}
        completedCourses={this.state.completedCourses}
        chapterCard={item.category_id} 
        titleCard={item.title}
        textCard={item.textCard}
        keywordsCard={item.keywordsCard}
        date={item.date}
        admin={this.props.admin}
        i={index}
        toDelete={this.cardToDeleteFromBtn}
        link={item.link}
        />
      )
  })
  }


  render() {
    console.log(this.state.courses)
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
