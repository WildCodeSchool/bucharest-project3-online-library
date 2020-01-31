import React from 'react'

import Filter from '../../Components/Filter/Filter'
import CardComponent from '../../Components/CardComponent/CardComponent'
import CourseModal from '../../Components/CourseModal/CourseModal'
import Navbar from '../../Components/NavbarComponent/Navbar'
import Footer from '../../Components/Footer/Footer'
import './AdminAllCourses.css'
import axios from 'axios'

// ADMIN PROPS SENT BY APP.JS DETERMINE IF PAGE DISPLAY IS FOR ADMIN OR USER

class AdminAllCourses extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latestCourses: [{
        headerColor: "#FA5457",
        chapterCard:'Psihologia Copulului si Adolescentului',
        titleCard:'Comunicarea eficienta cu copiii',
        textCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
        keywordsCard:
        "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
        link:'https://drive.google.com/file/d/1adl_NZgQsNm93mnW_BYG7N6PP20vwGYJ/view?usp=sharing',
        date:'18/01/2018'
    },
    {
        headerColor: "#FA5457",
        chapterCard:'Psihologia Copulului si Adolescentului',
        titleCard:'Cum creste un pui de om',
        textCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
        keywordsCard:
        "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
        link:'https://drive.google.com/file/d/14KEsg9vbng5gIU8m0Imbg3dMV324syqm/view?usp=sharing',
        date:'18/01/2018' 
    },
    {
        headerColor: "#FA5457",
        chapterCard:'Psihologia Copulului si Adolescentului',
        titleCard:'Cuvinte pentru adolescenti sau complexul homarului',
        textCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
        keywordsCard:
        "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
        link:'https://drive.google.com/file/d/1qCwO1fx-IyMMOwyqySxQ2E51VKhoedXq/view?usp=sharing',
        date:'09/07/2018' 
    },
    {
        headerColor: "#FA5457",
        chapterCard:'Psihologia Copulului si Adolescentului',
        titleCard:'Communication and children',
        textCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
        keywordsCard:
        "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
        link:'https://drive.google.com/file/d/1dweoRDHhjDeiTy83OYTGvYxKoHqUVnTb/view?usp=sharing',
        date:'18/01/2018' 
    },
    {
        headerColor: "#FA5457",
        chapterCard:'Carti/fise educative pe diverse teme',
        titleCard:'Ecologie',
        textCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
        keywordsCard:
        "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
        link:'https://drive.google.com/file/d/1dweoRDHhjDeiTy83OYTGvYxKoHqUVnTb/view?usp=sharing',
        date:'18/01/2018' 
    },
    {
        headerColor: "#FA5457",
        chapterCard:'Carti de povesti terapeutice',
        titleCard:'Supa de pui pentru suflet toata carta',
        textCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
        keywordsCard:
        "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
        link:'https://drive.google.com/file/d/1_DxEnBn6aUPZRtfAACwnAbY6oOm0k535/view?usp=sharing',
        date:'02/03/2018' 
    }
    ]
        }
    }

    componentDidMount(){
        axios.get('auth/courses')
          .then(res => {
            let courseArray = [];
            res.data.forEach(course => {
              let courseObject = {
                id: course.id,
                titleCard: course.title,
                textCard: course.description,
                link:course.link,
                date:course.createdAt,
                chapterCard: course.category_id
              }
              courseArray.push(courseObject)
    
            })
            this.setState({
                latestCourses: courseArray
              });
            });
        }

    AddCards = () => {
        return this.props.admin ?
            <h2 className="penLogo">&#9998;</h2> : null
    }
    NewCards = () => {
        console.log(this.state.latestCourses)
        return this.state.latestCourses.map((item, index) => {
            return <CardComponent 
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
        })
    }

    cardToDeleteFromBtn = (index) => {
        let q = this.state.latestCourses
        q.splice(index, 1)
        console.log(q)
        this.setState({
            LastestCoursesUpdated: q
        })
    }

    render(){
        console.log(this.state.latestCourses)
        return(
            <div className='AdminAllCoursesMain'>
                <Navbar admin={this.props.admin} />
                <div className='AdminAllCoursesTitle'>
                    <h1>Toate cursurile</h1>
                    {this.props.admin ? <CourseModal/> : false}
                </div>
                <div className='AdminAllCoursesFilter'>
                    <Filter />
                </div>
                <div className='AdminCourseCardContainer'>
                    {this.NewCards()}
                </div>
                <Footer />
            </div>
        )
    }
}

export default AdminAllCourses