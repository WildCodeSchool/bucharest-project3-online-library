import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';

import './SignUp.css';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname : ''
        }
    }

    render(){
        return(
            <div className="main">
                <header>
                    <div className="container-fluid headerMain">
                        <nav className="headerNav">
                            <a href="">Home</a>
                            <a href="">Courses</a>
                            <a href="">Profiles</a>
                        </nav>
                        <div className="logoPlaceholder">
                            <img src="https://via.placeholder.com/157x45" alt="logo"/>
                        </div>
                    </div>
                </header>
                <div className="signUpTitle">
                    <h1>Creare Cont</h1>
                </div>
                <form className="formMain" autoComplete="off">
                    <div className="topForm">
                        <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Nume"
                                    className="signUpInput signUpInputLeft"
                                    margin="normal"
                                    variant="filled"
                                    // color={createMuiTheme.palette.secondary.main}
                                    />
                                    <TextField
                                    required
                                    id="filled-required"
                                    label="Prenume"
                                    className="signUpInput signUpInputRight"
                                    margin="normal"
                                    variant="filled"
                                    />
                        </div>

                        <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Email"
                                    type="email"
                                    className="signUpInput signUpInputLeft"
                                    margin="normal"
                                    variant="filled"
                                    />
                                    <TextField
                                    required
                                    id="filled-required"
                                    label="Numar Telefon"
                                    className="signUpInput signUpInputRight"
                                    margin="normal"
                                    variant="filled"
                                    />
                        </div>

                        <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Judetul in care est voluntar"
                                    className="signUpInput signUpInputLeft"
                                    margin="normal"
                                    variant="filled"
                                    />
                                    <TextField
                                    required
                                    id="filled-required"
                                    label="Centrul in care esti Voluntar"
                                    className="signUpInput signUpInputRight"
                                    margin="normal"
                                    variant="filled"
                                    />
                        </div>

                        <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Numarul contractului de Voluntar"
                                    className="signUpInput signUpInputLeft"
                                    margin="normal"
                                    variant="filled"
                                    style={{fontSize:"29px"}}
                                    />
                                    <TextField
                                    required
                                    id="filled-required"
                                    label="Data semnarii contractului de Voluntar"
                                    className="signUpInput signUpInputRight"
                                    margin="normal"
                                    variant="filled"
                                    />
                        </div>

                    </div>
                    <div className="bottomForm">
                        <div className="row">
                                    <TextField
                                        required
                                        id="filled-required"
                                        label="Parola"
                                        type="password"
                                        className="signUpInput"
                                        margin="normal"
                                        variant="filled"
                                        />
                        </div>

                        <div className="row">
                                    <TextField
                                        required
                                        id="filled-required"
                                        label="Confirmare parola"
                                        type="password"
                                        className="signUpInput"
                                        margin="normal"
                                        variant="filled"
                                        />
                        </div>
                    </div>
                    <div className="signUpBtnContainer">
                        <button label="Submit" type="submit">
                            Inscriere
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;