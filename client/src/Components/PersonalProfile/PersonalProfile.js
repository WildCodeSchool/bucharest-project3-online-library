import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import icon from './icon.png';
import './PersonalProfile.css';
import ProfileCourseCard from '../ProfileCourseCard/ProfileCourseCard';


const courses=[
    {
        chapterTitle:'Love',
        courseTitle:'How to..',
        courseLink:'http//.dasdadasdfdsadasrewtre241324a'
    },
    {
        chapterTitle:'Love',
        courseTitle:'How to..',
        courseLink:'http//.dasdadasdfdsadasrewtre241324a' 
    },
    {
        chapterTitle:'Love',
        courseTitle:'How to..',
        courseLink:'http//.dasdadasdfdsadasrewtre241324a' 
    },
    {
        chapterTitle:'Love',
        courseTitle:'How to..',
        courseLink:'http//.dasdadasdfdsadasrewtre241324a' 
    },
    {
        chapterTitle:'Love',
        courseTitle:'How to..',
        courseLink:'http//.dasdadasdfdsadasrewtre241324a' 
    },
    {
        chapterTitle:'Love',
        courseTitle:'How to..',
        courseLink:'http//.dasdadasdfdsadasrewtre241324a' 
    },
    {
        chapterTitle:'Love',
        courseTitle:'How to..',
        courseLink:'http//.dasdadasdfdsadasrewtre241324a' 
    }
]


class PersonalProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nume: 'Popescu',
            prenume: 'Adina',
            email: 'adina.popescu@gmail.com',
            judetul: 'Bucuresti',
            centrul: '12589',
            contractului: '12589',
            dataSemnarii: '01-05-2015',
            telefon: '0752 522 514'
        }
    }

    render() {
        return (
            <div className='pp-container'> 
                <div className="leftSide">
                    <div className="pp-base">
                        {/* <div className="pp-main" >
                            <div className="container-fluid pp-headerMain"> */}
                                <form className="pp-formMain" autoComplete="off">
                                    <div className="column">
                                        <TextField

                                            id="filled-required"
                                            label="Nume"
                                            className="signUpInput signUpInputLeft"
                                            margin="normal"
                                            variant="filled"
                                            value={this.state.nume}
                                        />

                                        <TextField

                                            id="filled-required"
                                            label="Prenume"
                                            className="signUpInput signUpInputRight"
                                            margin="normal"
                                            variant="filled"
                                            value={this.state.prenume}
                                        />
                                        <TextField

                                            id="filled-required"
                                            label="Email"
                                            type="email"
                                            className="signUpInput signUpInputLeft"
                                            margin="normal"
                                            variant="filled"
                                            value={this.state.email}
                                        />
                                        <TextField

                                            id="filled-required"
                                            label="Judetul in care esti voluntar"
                                            className="signUpInput signUpInputLeft"
                                            margin="normal"
                                            variant="filled"
                                            value={this.state.judetul}
                                        />
                                        <TextField

                                            id="filled-required"
                                            label="Centrul in care esti voluntar"
                                            className="signUpInput signUpInputRight"
                                            margin="normal"
                                            variant="filled"
                                            value={this.state.centrul}
                                        />
                                        <TextField

                                            id="filled-required"
                                            label="Numarul contractului de voluntar"
                                            className="signUpInput signUpInputLeft"
                                            margin="normal"
                                            variant="filled"
                                            value={this.state.contractului}
                                        />
                                        <TextField

                                            id="filled-required"
                                            label="Data semnarii contractului de voluntar"
                                            className="signUpInput signUpInputRight"
                                            margin="normal"
                                            variant="filled"
                                            value={this.state.dataSemnarii}
                                        />
                                        <TextField

                                            id="filled-required"
                                            label="Numar Telefon"
                                            className="signUpInput signUpInputRight"
                                            margin="normal"
                                            variant="filled"
                                            value={this.state.telefon}
                                        />
                                    </div>
                                </form>
                            {/* </div>
                        </div> */}
                    </div>
                </div>

                <div className='rightSide'>
                    <div class="search-container">
                        <form className='searchStyle' action="/action_page.php">
                            <input className='searchField' type="text" placeholder="Search.." name="search" />
                            <button className='searchBtn' type="submit"><img src={icon} alt='search' /></button>
                        </form>
                        <div className="courses-done">
                            {courses.map((item, i) => {
                                return <ProfileCourseCard {...item} key={i} />
                            })}
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default PersonalProfile;