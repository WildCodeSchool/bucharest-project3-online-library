import React from 'react';
import TextField from '@material-ui/core/TextField';
import './SignUp.css';

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                    nume : '',
                    prenume: '',
                    email: '',
                    numarTelefon : '',
                    judetul: '',
                    centrul: '',
                    contractului: '',
                    dataSemnarii: '',
                    parola: '',
                    parolaConfirmed: false,
                    id: 0
                }
    }

    // handleChange = (e) => {
    //     const target = e.target
    //     const value = target.value
    //     const label = target.label
    //     this.setState({
    //         [label] : value
    //     })
    //     console.log(this.state)
    // }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    console.log(this.state)
    }

    handlePasswordConfirm = (e) => {
        this.state.parola === e.target.value 
        ? this.setState({ parolaConfirmed : true }) 
        : this.setState({ parolaConfirmed :false})
    }

    render(){
        return(
            <div className="main">
                <header>
                    <div className="container-fluid headerMain">
                        {/* <nav className="headerNav">
                            <a href="">Home</a>
                            <a href="">Courses</a>
                            <a href="">Profiles</a>
                        </nav> */}
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
                                    value={this.state.nume}
                                    onChange={this.handleChange('nume')}
                                />
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Prenume"
                                    className="signUpInput signUpInputRight"
                                    margin="normal"
                                    variant="filled"
                                    value={this.state.prenume}
                                    onChange={this.handleChange('prenume')}
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
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                    />
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Numar Telefon"
                                    className="signUpInput signUpInputRight"
                                    margin="normal"
                                    variant="filled"
                                    value={this.state.numarTelefon}
                                    onChange={this.handleChange('numarTelefon')}
                                />
                        </div>

                        <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Judetul in care esti voluntar"
                                    className="signUpInput signUpInputLeft"
                                    margin="normal"
                                    variant="filled"
                                    value={this.state.judetul}
                                    onChange={this.handleChange('judetul')}
                                />
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Centrul in care esti voluntar"
                                    className="signUpInput signUpInputRight"
                                    margin="normal"
                                    variant="filled"
                                    value={this.state.centrul}
                                    onChange={this.handleChange('centrul')}
                                />
                        </div>

                        <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Numarul contractului de voluntar"
                                    className="signUpInput signUpInputLeft"
                                    margin="normal"
                                    variant="filled"
                                    value={this.state.contractului}
                                    onChange={this.handleChange('contractului')}                                    />
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Data semnarii contractului de voluntar"
                                    className="signUpInput signUpInputRight"
                                    margin="normal"
                                    variant="filled"
                                    value={this.state.dataSemnarii}
                                    onChange={this.handleChange('dataSemnarii')}
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
                                    value={this.state.parola}
                                    onChange={this.handleChange('parola')}
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
                                    onChange={this.handlePasswordConfirm}
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