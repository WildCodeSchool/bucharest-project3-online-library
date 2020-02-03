import React from 'react';
import TextField from '@material-ui/core/TextField';
// import logo from '../../am-logo-retina.png';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';

import logo from '../../assets/images/logo.png';
import './SignUp.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nume: '',
            prenume: '',
            email: '',
            numarTelefon: '',
            judetul: '',
            centrul: '',
            nrcontractului: '',
            dataSemnarii: '',
            parola: '',
            parolaConfirmed: false,
            id: 0,
            flash: ''
        }
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
        console.log(this.state)
    }

    handlePasswordConfirm = (e) => {
        this.state.parola === e.target.value
            ? this.setState({ parolaConfirmed: true })
            : this.setState({ parolaConfirmed: false })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('auth/signup',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res.message)
                console.log(this.props.history)
                this.props.history.replace('/')
            })
            .catch(err => this.setState({
                flash: err.message
            }))
    }

    handleDateChange = date => {
        this.setState({
            dataSemnarii: date
        })
    };

    render() {
        console.log(this.state.dataSemnarii)
        return (
            <div className="main">
                <header>
                    <div className="container-fluid headerMain">
                        <div className="logoPlaceholder">
                            <img src={logo} alt="logo" className="logo" />
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
                                value={this.state.nrcontractului}
                                onChange={this.handleChange('nrcontractului')}
                            />
                            {/* <TextField
                                    required
                                    id="filled-required"
                                    label="Data semnarii contractului de voluntar (ex: 2020-01-23)"
                                    className="signUpInput signUpInputRight"
                                    margin="normal"
                                    variant="filled"
                                    value={this.state.dataSemnarii}
                                    onChange={this.handleChange('dataSemnarii')}
                                /> */}

                            <TextField
                                require
                                id="date"
                                label="Data semnarii contractului de voluntar (ex: 10-23-2020)"
                                type="date"
                                // defaultValue="2017-05-24"
                                className="signUpInput signUpInputRight"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={this.state.dataSemnarii}
                                onChange={this.handleChange('dataSemnarii')}
                            />


                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        // variant="block"
                                        format="yyyy/MM/dd"
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        className="signUpInput signUpInputRight dateSelector"
                                        value={this.state.dataSemnarii}
                                        onChange={this.handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                            </MuiPickersUtilsProvider> */}
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
                        <button label="Submit" type="submit" onClick={this.handleSubmit}>
                            Inscriere
                            </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignUp);