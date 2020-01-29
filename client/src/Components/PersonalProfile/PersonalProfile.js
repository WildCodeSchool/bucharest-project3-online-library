import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import icon from "./icon.png";
import "./PersonalProfile.css";
import FormControl from '@material-ui/core/FormControl';
import ProfileCourseCard from "../ProfileCourseCard/ProfileCourseCard";

const courses = [
  {
    chapterTitle: "Love",
    courseTitle: "How to..",
    courseLink: "http//.dasdadasdfa"
  },
  {
    chapterTitle: "Love",
    courseTitle: "How to..",
    courseLink: "http//.dasdadasdfdsadasrewtre241324a"
  },
  {
    chapterTitle: "Love",
    courseTitle: "How to..",
    courseLink: "http//.dasdadasdfdsadasrewtre241324a"
  },
  {
    chapterTitle: "Love",
    courseTitle: "How to..",
    courseLink: "http//.dasdadasdfdsadasrewtre241324a"
  },
  {
    chapterTitle: "Love",
    courseTitle: "How to..",
    courseLink: "http//.dasdadasdfdsadasrewtre241324a"
  },
  {
    chapterTitle: "Love",
    courseTitle: "How to..",
    courseLink: "http//.dasdadasdfdsadasrewtre241324a"
  },
  {
    chapterTitle: "Love",
    courseTitle: "How to..",
    courseLink: "http//.dasdadasdfdsadasrewtre241324a"
  }
];

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
      telefon: this.props.profile.phonenumber
    };
  }

  render() {
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
                  value={this.state.nume}
                />
               
                <TextField
                  id="filled-required"
                  label="Prenume"
                  margin="normal"
                  variant="filled"
                  value={this.state.prenume}
                />

                <TextField
                  id="filled-required"
                  label="Email"
                  type="email"
                  margin="normal"
                  variant="filled"
                  value={this.state.email}
                />

                <TextField
                  id="filled-required"
                  label="Judetul in care esti voluntar"
                  margin="normal"
                  variant="filled"
                  value={this.state.judetul}
                />
    

                <TextField
                  id="filled-required"
                  label="Centrul in care esti voluntar"
                  margin="normal"
                  variant="filled"
                  value={this.state.centrul}
                />
      
                <TextField
                  id="filled-required"
                  label="Numarul contractului de voluntar"
                  margin="normal"
                  variant="filled"
                  value={this.state.contractului}
                />
              
                <TextField
                  id="filled-required"
                  label="Data semnarii contractului"
                  margin="normal"
                  variant="filled"
                  value={this.state.dataSemnarii}
                />
                
                <TextField
                  id="filled-required"
                  label="Numar Telefon"
                  margin="normal"
                  variant="filled"
                  value={this.state.telefon}
                />
                </div>
            </form>
          </div>
        </div>

        <div className="rightSide">
          <div class="search-container">
            <div className="searchBarWrapper">
              <FormControl className="searchStyle" action="/action_page.php">
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
              {courses.map((item, i) => {
                return <ProfileCourseCard {...item} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;
