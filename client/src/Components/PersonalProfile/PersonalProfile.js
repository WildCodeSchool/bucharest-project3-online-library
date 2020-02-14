import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import icon from "./icon.png";
import "./PersonalProfile.css";
import FormControl from '@material-ui/core/FormControl';
import ProfileCourseCard from "../ProfileCourseCard/ProfileCourseCard";

import { connect } from 'react-redux';

const courses = [];

class PersonalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nume: this.props.profile.lastname,
      prenume: this.props.profile.firstname,
      email: this.props.profile.email,
      judetul: this.props.profile.volunteering_county,
      centrul:this.props.profile.volunteering_center,
      contractului: this.props.profile.contract_number,
      dataSemnarii: new Date(this.props.profile.date_joined).toLocaleDateString('en-GB'),
      telefon: this.props.profile.phonenumber,
      allCourses: [],
      completedCoursesId: [],
      completedCourses: []
    };
  }

  componentDidMount = () => {
    fetch('https://rocky-refuge-51400.herokuapp.com/auth/completedCourses/'+ this.props.auth.id,{
        method: "GET"
    })
        .then(res => res.json())
        .then(list => {
          console.log(this.props.auth.id)
          console.log(list)
          let listOfIds = list.map(item => item.course_id)
            this.setState({
                completedCoursesId: listOfIds
            })
        })

    fetch('https://rocky-refuge-51400.herokuapp.com/auth/courses', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(allCourses => {
      this.setState({
        allCourses: allCourses
      })
    })
  }

change = (e) => {
this.setState({
  [e.target.name]: e.target.value
})
}

  completedCoursesByUserCards = () => {
    let coursesCompletedAmongAllCourses= []
    this.state.allCourses.forEach(course => {
      if (this.state.completedCoursesId.includes(course.id)) 
        coursesCompletedAmongAllCourses.push(course)
      else
        return false
    })
    console.log('completedCoursesId' + this.state.completedCoursesId)
    console.log('allCourses' + this.state.allCourses)
    console.log('coursesCompletedAmongAllCourses : ' +coursesCompletedAmongAllCourses)
    return coursesCompletedAmongAllCourses.map((item, i) => {
      console.log('item : ' + item.title)
      return <ProfileCourseCard {...item} key={i} />;
    })
  }

  render() {
    console.log(this.state.completedCoursesId)
    return (
      <div className="pp-container">
        <div className="leftSide">
          <h1>Detalii profil</h1>
          <div className="pp-base">
            <form className="pp-formMain" autoComplete="off">
              <div className="pp-column">
                <TextField
                  id="filled-required"
                  label="Nume"
                  margin="normal"
                  variant="filled"
                  name="nume"
                  onChange={this.change}
                  value={this.state.nume}
                />
               
                <TextField
                  id="filled-required"
                  label="Prenume"
                  margin="normal"
                  variant="filled"
                  name="prenume"
                  onChange={this.change}
                  value={this.state.prenume}
                />

                <TextField
                  id="filled-required"
                  label="Email"
                  type="email"
                  margin="normal"
                  variant="filled"
                  name="email"
                  onChange={this.change}
                  value={this.state.email}
                />

                <TextField
                  id="filled-required"
                  label="Judetul in care esti voluntar"
                  margin="normal"
                  variant="filled"
                  name="judetul"
                  onChange={this.change}
                  value={this.state.judetul}
                />
    
                <TextField
                  id="filled-required"
                  label="Centrul in care esti voluntar"
                  margin="normal"
                  variant="filled"
                  name="centrul"
                  onChange={this.change}
                  value={this.state.centrul}
                />
      
                <TextField
                  id="filled-required"
                  label="Numarul contractului de voluntar"
                  margin="normal"
                  variant="filled"
                  name="contractului"
                  onChange={this.change}
                  value={this.state.contractului}
                />
              
                <TextField
                  id="filled-required"
                  label="Data semnarii contractului"
                  margin="normal"
                  variant="filled"
                  name="dataSemnarii"
                  onChange={this.change}
                  value={this.state.dataSemnarii}
                />
                
                <TextField
                  id="filled-required"
                  label="Numar Telefon"
                  margin="normal"
                  variant="filled"
                  name="telefon"
                  onChange={this.change}
                  value={this.state.telefon}
                />
                </div>
            </form>
          </div>
        </div>

        <div className="rightSide">
          <div class="search-container">
            <div className="searchBarWrapper">
              <FormControl className="searchStyle">
                <input
                  className="searchField"
                  type="text"
                  placeholder="Cauta in toate cursurile.."
                  name="search"
                />
                <button className="searchBtn" type="submit">
                  <img src={icon} alt="search" />
                </button>
              </FormControl>
            </div>
            <div className="cardsWrapper">
              {this.completedCoursesByUserCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps) (PersonalProfile);
