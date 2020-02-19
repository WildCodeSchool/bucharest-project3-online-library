import React from 'react'

import Filter from '../../Components/Filter/Filter'
import CardComponent from '../../Components/CardComponent/CardComponent'
import CourseModal from '../../Components/CourseModal/CourseModal'
import Navbar from '../../Components/NavbarComponent/Navbar'
import Footer from '../../Components/Footer/Footer'
import './AdminAllCourses.css'
import axios from 'axios'

import { connect } from 'react-redux'
import { withRouter, Redirect } from "react-router";

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
        latestCourses: [],
        filteredObj: []
        }
    }

    componentDidMount(){
        fetch('https://rocky-refuge-51400.herokuapp.com/auth/courses', {
            method: 'GET'
        })
          .then(res => {
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

        fetch('https://rocky-refuge-51400.herokuapp.com/auth/completedCourses/'+ this.props.auth.id, {
            method: 'GET'
        })
        .then(res => {
            if(res.ok)
                return res.json()
                .then(res => {
                    let completedCoursesId = res.map(item => item.course_id )
                    this.setState({
                        completedCourses: completedCoursesId,
                        isLoading: false

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

    setFilteredObjForMapping = (filterReturned) => {
        this.setState({ filteredObj: filterReturned.filterObj})
        console.log(filterReturned)
        // this.NewCards()
    }

    NewCards = () => {
        if(this.state.isLoading == false){
            if(this.state.filteredObj.completed == null 
                || this.state.filteredObj.completed == undefined )
               {
                   console.log(this.state.latestCourses)
                    return this.state.latestCourses.map((item, index) => {
                        return <CardComponent
                            headerColor={item.is_important ?
                                this.state.headerColorImportant
                                :
                                this.state.headerColorStandard}
                            completedCourses={this.state.completedCourses}
                            userId={this.state.userId}
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
                    })
                } else {
                    // let filteredCourses = this.state.latestCourses
                    //     .filter((course => (
                    //         this.state.filteredObj.completed ?
                    //                 this.state.completedCourses.includes(course.id)
                    //                 :
                    //                 !this.state.completedCourses.includes(course.id)
                    //                 )
                    //             ))
                    //             console.log(this.state.latestCourses)
                    //             console.log(filteredCourses)
                    //             console.log(this.state.filteredObj.completed)
                    //             console.log(this.state.completedCourses)
                    //     return filteredCourses.map((item, index) => {
                        const completedCourses = this.state.completedCourses
                        return this.state.latestCourses
                        .filter((course => (
                            this.state.filteredObj.completed ?
                                    completedCourses.includes(course.id)
                                    :
                                    !completedCourses.includes(course.id)
                                    )
                                )).map((item, index) => {
                            console.log(completedCourses.includes(item.id))
                        return <CardComponent
                            headerColor={item.is_important ?
                                this.state.headerColorImportant
                                :
                                this.state.headerColorStandard}
                            flag={this.state.filteredObj.completed}
                            completedCourses={completedCourses}
                            userId={this.state.userId}
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
                    })
                }
            } else {
                return (
                <div>
                    <h2>
                        Cursurile se încarcă...
                    </h2>
                </div>
                )
            }
    }

    cardToDeleteFromBtn = (index) => {
        let q = this.state.latestCourses
        q.splice(index, 1)
        this.setState({
            LastestCoursesUpdated: q
        })
    }

    render(){
        console.log(this.state)
        if(!this.props.auth.token && localStorage.getItem('userToken') !== null) {
            this.props.auth.token = localStorage.getItem('userToken')
            this.props.auth.email = localStorage.getItem('userEmail')
            this.props.auth.password = localStorage.getItem('userPassword')
            this.props.auth.firstname = localStorage.getItem('userName')
            this.props.auth.lastname = localStorage.getItem('userLastname')
            this.props.auth.volunteering_county = localStorage.getItem('userCounty')
            this.props.auth.volunteering_center = localStorage.getItem('userCenter')
            this.props.auth.contract_number = localStorage.getItem('userContractNumber')
            this.props.auth.date_joined = localStorage.getItem('userDateJoined')
            this.props.auth.phonenumber = localStorage.getItem('userPhoneNumber')
            this.props.auth.token = localStorage.getItem('userToken')
            this.props.auth.id = localStorage.getItem('userId')
            this.props.auth.access_level = (localStorage.getItem('userAccessLevel') === "true")
        }
        if(!this.props.auth.token) this.props.history.push('/')

        {return this.state.noCoursesAvailable ?
            (
                <div className='AdminAllCoursesMain'>
                    <Navbar admin={this.props.auth.access_level} />
                    <div className='AdminAllCoursesTitle'>
                        <h1>Toate cursurile</h1>
                        {this.props.auth.access_level ? <CourseModal/> : false}
                    </div>
                    <div className='AdminAllCoursesFilter'>
                        <Filter  filterObj={this.setFilteredObjForMapping}/>
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
                    <Navbar admin={this.props.auth.access_level} />
                    <div className='AdminAllCoursesTitle'>
                        <h1>Toate cursurile</h1>
                        {this.props.auth.access_level ? <CourseModal/> : false}
                    </div>
                    <div className='AdminAllCoursesFilter'>
                        <Filter filterObj={this.setFilteredObjForMapping}/>
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

export default withRouter(connect(mapStateToProps) (AdminAllCourses));