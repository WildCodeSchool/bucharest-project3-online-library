import React from 'react'

import Filter from '../../Components/Filter/Filter'
import CardComponent from '../../Components/CardComponent/CardComponent'
import CourseModal from '../../Components/CourseModal/CourseModal'
import Navbar from '../../Components/NavbarComponent/Navbar'
import Footer from '../../Components/Footer/Footer'
import './AdminAllCourses.css'

import { connect } from 'react-redux'

// ADMIN PROPS SENT BY APP.JS DETERMINE IF PAGE DISPLAY IS FOR ADMIN OR USER

class AdminAllCourses extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId: this.props.auth.id,
            noCoursesAvailable: false,
            courses: [],
            completedCourses: '',
            headerColorStandard: "#000",
            headerColorImportant: "#FA5457",
            latestCourses: [
    //             {
    //     headerColor: "#FA5457",
    //     chapterCard:'Psihologia Copulului si Adolescentului',
    //     titleCard:'Comunicarea eficienta cu copiii',
    //     textCard:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
    //     keywordsCard:
    //     "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
    //     link:'https://drive.google.com/file/d/1adl_NZgQsNm93mnW_BYG7N6PP20vwGYJ/view?usp=sharing',
    //     date:'18/01/2018'
    // },
    // {
    //     headerColor: "#FA5457",
    //     chapterCard:'Psihologia Copulului si Adolescentului',
    //     titleCard:'Cum creste un pui de om',
    //     textCard:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
    //     keywordsCard:
    //     "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
    //     link:'https://drive.google.com/file/d/14KEsg9vbng5gIU8m0Imbg3dMV324syqm/view?usp=sharing',
    //     date:'18/01/2018' 
    // },
    // {
    //     headerColor: "#FA5457",
    //     chapterCard:'Psihologia Copulului si Adolescentului',
    //     titleCard:'Cuvinte pentru adolescenti sau complexul homarului',
    //     textCard:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
    //     keywordsCard:
    //     "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
    //     link:'https://drive.google.com/file/d/1qCwO1fx-IyMMOwyqySxQ2E51VKhoedXq/view?usp=sharing',
    //     date:'09/07/2018' 
    // },
    // {
    //     headerColor: "#FA5457",
    //     chapterCard:'Psihologia Copulului si Adolescentului',
    //     titleCard:'Communication and children',
    //     textCard:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
    //     keywordsCard:
    //     "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
    //     link:'https://drive.google.com/file/d/1dweoRDHhjDeiTy83OYTGvYxKoHqUVnTb/view?usp=sharing',
    //     date:'18/01/2018' 
    // },
    // {
    //     headerColor: "#FA5457",
    //     chapterCard:'Carti/fise educative pe diverse teme',
    //     titleCard:'Ecologie',
    //     textCard:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
    //     keywordsCard:
    //     "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
    //     link:'https://drive.google.com/file/d/1dweoRDHhjDeiTy83OYTGvYxKoHqUVnTb/view?usp=sharing',
    //     date:'18/01/2018' 
    // },
    // {
    //     headerColor: "#FA5457",
    //     chapterCard:'Carti de povesti terapeutice',
    //     titleCard:'Supa de pui pentru suflet toata carta',
    //     textCard:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
    //     keywordsCard:
    //     "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
    //     link:'https://drive.google.com/file/d/1_DxEnBn6aUPZRtfAACwnAbY6oOm0k535/view?usp=sharing',
    //     date:'02/03/2018' 
    // }
    ]
        }
    }

    AddCards = () => {
        return this.props.admin ?
            <h2 className="penLogo">&#9998;</h2> : null
    }

    componentDidMount = () => {
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
            else
            this.setState({
                noCoursesAvailable: true
            })
        })

        fetch('auth/completedCourses/'+ this.state.userId, {
            method: 'GET'
        })
        .then(res => {
            if(res.ok)
                return res.json()
                .then(res => {
                    let completedCoursesId = res.map(item => item.course_id )
                    this.setState({
                        completedCourses: completedCoursesId
                    })
                })
            else
                alert('No courses completed')
        })
    }

    NewCards = () => {
        return this.state.courses.map((item, index) => {
            return <CardComponent
                        headerColor={item.is_important ?
                            this.state.headerColorImportant
                            :
                            this.state.headerColorStandard}
                        completedCourses={this.state.completedCourses}
                        userId={this.state.userId}
                        courseId={item.id}
                        chapterCard={item.category_id}
                        titleCard={item.title}
                        textCard={item.description}
                        keywordsCard={item.keywordsCard}
                        date={item.createdAt}
                        admin={this.props.admin}
                        i={index}
                        toDelete={this.cardToDeleteFromBtn}
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
        console.log("courses : " + this.state.courses)
        console.log("Completed courses : " + this.state.completedCourses)
        console.log('users details from redux are : ' + this.props.auth)
        console.log('userId from redux is : ' + this.props.auth.id)
        console.log('userId from state is : ' + this.state.userId)
        console.log('TOKEN HERE : ' + this.props.auth.token)

        {return this.state.noCoursesAvailable ?
        (
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
                    No courses available.
                </div>
                <Footer />
            </div>
        )
        :
        (
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
}

function mapStateToProps(state) {
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps) (AdminAllCourses);