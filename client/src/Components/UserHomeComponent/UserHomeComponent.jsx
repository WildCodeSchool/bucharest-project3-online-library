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

      headerColor: "#FA5457",
      chapterCard: "Chapter Title",
      textCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
      keywordsCard:
        "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
      date: "10.12.2019",
    };
  }

  componentDidMount(){
    axios.get('auth/courses')
      .then(res => {
        let courseArray = [];
        for(let i=res.data.length-1; i > res.data.length-7; i--) {
          let course = res.data[i];
          let courseObject = {
            id: course.id,
            titleCard: course.title,
            textCard: course.description,
            link:course.link,
            date:course.createdAt,
            chapterCard: course.category_id
          }
          courseArray.push(courseObject)

        }
        this.setState({
            courses: courseArray
          });
        });
    }

  showCard =() =>{
    return this.state.courses.map((item, index) => {
      return (
        <CardComponent 
        headerColor={item.headerColor}
        chapterCard={item.chapterCard} 
        titleCard={item.titleCard}
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
    return (
      <div className='container'>
        <header className='headerContainer'>
    <h1 className='titleWelcome'>Salut {this.props.userName}</h1>
            <h2 className="subtitleWelcome">Cele mai recente cursuri</h2>
        </header>
        <main className="mainContainer">
       
        {this.showCard()}

          {/* <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
            admin={this.props.admin}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
            admin={this.props.admin}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
            admin={this.props.admin}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
            admin={this.props.admin}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
            admin={this.props.admin}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
            admin={this.props.admin}
          /> */}
        </main>
      </div>
    );
  }
}

export default UserHomeComponent;
