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
      nrcontractului: this.props.profile.contract_number,
      dataSemnarii: new Date(this.props.profile.date_joined).toLocaleDateString('en-GB'),
      numarTelefon: this.props.profile.phonenumber,
      allCourses: [],
      completedCoursesId: [],
      completedCourses: [],
      edit: false
    };
  }

  componentDidMount = () => {
    fetch('https://rocky-refuge-51400.herokuapp.com/auth/completedCourses/'+ this.props.auth.id,{
        method: "GET"
    })
        .then(res => res.json())
        .then(list => {
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
    return coursesCompletedAmongAllCourses.map((item, i) => {
      return <ProfileCourseCard {...item} key={i} />;
    })
  }

  handleChangeUserDetails = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  editEnable = () => {
    this.setState({
      edit:!this.state.edit
    })
  } 

  saveNewUserDetails = (e) => {
    e.preventDefault()
    fetch('https://rocky-refuge-51400.herokuapp.com/auth/users/'+ this.props.profile.id,{
      method: "PUT",
      headers: new Headers({
        "Content-Type" : "application/json"
      }),
      body: JSON.stringify({
        nume: this.state.nume,
        prenume:  this.state.prenume,
        email:  this.state.email,
        judetul: this.state.judetul,
        centrul:this.state.centrul,
        nrcontractului: this.state.nrcontractului,
        dataSemnarii: this.state.dataSemnarii,
        numarTelefon: this.state.numarTelefon
      })
  })
      .then(res => res.json())
  }

  render() {
    console.log(this.state.dataSemnarii)
    console.log(new Date(this.state.dataSemnarii.split('/')[2],
                          this.state.dataSemnarii.split('/')[1],
                          this.state.dataSemnarii.split('/')[0]))

    return (
      <div className="pp-container">
        <div className="leftSide">
          <h1>Detalii profil</h1>
          <div className="pp-base">
            <button className='editBtns' onClick={this.editEnable}>Edit info</button>
            <form className="pp-formMain" autoComplete="off">
              {this.state.edit ? 
                <div className="pp-column">
                  <TextField
                  id="filled-required"
                  label="Nume"
                  name="nume"
                  margin="normal"
                  variant="filled"
                  defaultValue={this.state.nume}
                  onChange={this.handleChangeUserDetails}
                />

                  <TextField
                  id="filled-required"
                  label="Prenume"
                  name="prenume"
                  margin="normal"
                  variant="filled"
                  defaultValue={this.state.prenume}
                  onChange={this.handleChangeUserDetails}
                />

                <TextField
                  id="filled-required"
                  label="Email"
                  name="email"
                  type="email"
                  margin="normal"
                  variant="filled"
                  defaultValue={this.state.email}
                  onChange={this.handleChangeUserDetails}
                />

                <TextField
                  id="filled-required"
                  label="Judetul in care esti voluntar"
                  name="judetul"
                  margin="normal"
                  variant="filled"
                  defaultValue={this.state.judetul}
                  onChange={this.handleChangeUserDetails}
                />
    
                <TextField
                  id="filled-required"
                  label="Centrul in care esti voluntar"
                  name="centrul"
                  margin="normal"
                  variant="filled"
                  defaultValue={this.state.centrul}
                  onChange={this.handleChangeUserDetails}
                />
      
                <TextField
                  id="filled-required"
                  label="Numarul contractului de voluntar"
                  name="nrcontractului"
                  margin="normal"
                  variant="filled"
                  defaultValue={this.state.nrcontractului}
                  onChange={this.handleChangeUserDetails}
                />
              
                <TextField
                  id="filled-required"
                  label="Data semnarii contractului"
                  name="dataSemnarii"
                  margin="normal"
                  variant="filled"
                  defaultValue={this.state.dataSemnarii}
                  onChange={this.handleChangeUserDetails}
                />
                
                <TextField
                  id="filled-required"
                  label="Numar Telefon"
                  name="numarTelefon"
                  margin="normal"
                  variant="filled"
                  defaultValue={this.state.numarTelefon}
                  onChange={this.handleChangeUserDetails}
                />

                <button className='editBtns' onClick={this.saveNewUserDetails}>Save</button>
                </div>
              :
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
                  value={this.state.nrcontractului}
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
                  label="Numar numarTelefon"
                  margin="normal"
                  variant="filled"
                  value={this.state.numarTelefon}
                />
                </div>
              }
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
