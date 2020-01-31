import React from 'react'

import Filter from '../../Components/Filter/Filter'
import CardComponent from '../../Components/CardComponent/CardComponent'
import CourseModal from '../../Components/CourseModal/CourseModal'
import Navbar from '../../Components/NavbarComponent/Navbar'
import Footer from '../../Components/Footer/Footer'
import './AdminAllCourses.css'
import axios from 'axios'

import { connect } from 'react-redux'

// ADMIN PROPS SENT BY APP.JS DETERMINE IF PAGE DISPLAY IS FOR ADMIN OR USER

class AdminAllCourses extends React.Component{
    constructor(props){
        super(props);
        this.state={
        userId: this.props.auth.id,
        noCoursesAvailable: false,
        completedCourses: '',
        headerColorStandard: "#75B1A9",
        headerColorImportant: "#FA5457",
        headerColorCompleted: "#A1BE95",
        latestCourses: []
        }
    }

    componentDidMount(){
        // axios.get('auth/courses')
        fetch('/auth/courses', {
            method: 'GET'
        })
          .then(res => {
            // let courseArray = [];
            // res.data.forEach(course => {
            //   let courseObject = {
            //     id: course.id,
            //     titleCard: course.title,
            //     textCard: course.description,
            //     link:course.link,
            //     date:course.createdAt,
            //     chapterCard: course.category_id
            //   }
            //   courseArray.push(courseObject)

            // })
            // this.setState({
            //     latestCourses: courseArray
            //   });
            if(res.ok)
                return res.json()
                .then(res => {
                    this.setState({
                        latestCourses: res
                    })
                })
            else
            this.setState({
                noCoursesAvailable: true
            })
            });
        
        
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
        

    AddCards = () => {
        return this.props.admin ?
            <h2 className="penLogo">&#9998;</h2> : null
    }
    NewCards = () => {
        // console.log(this.state.latestCourses)
        return this.state.latestCourses.map((item, index) => {
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
                link={item.link}
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
        console.log(this.state.latestCourses)

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