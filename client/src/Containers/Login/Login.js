import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './Login.css';

import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router";


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    updateField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch('/auth/signin',
        {
            method : 'POST',
            headers : new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(this.state)
        })
        .then(res => {
            if(res.ok)
                return res.json()
            else
                throw new Error(res.statusText)
        })
        .then(res => {
            this.setState({
                flash: res.message.info
            })
            this.props.dispatch({
                type: "CREATE_SESSION",
                email: res.user.email,
                password: res.user.password,
                firstname: res.user.firstname,
                lastname: res.user.lastname,
                volunteering_county: res.user.volunteering_county,
                volunteering_center: res.user.volunteering_center,
                contract_number: res.user.contract_number,
                date_joined: res.user.createdAt,
                phonenumber: res.user.phonenumber,
                token: res.token
            })
            this.props.history.push('acasa')
        })
            // return <Redirect to='/acasa'/>
        .catch(err => { this.setState({
            message: err.message.info
        })})
    }

    render() {
        console.log(this.props.auth)
        console.log(new Date("2020-01-28T14:39:49.000Z").toLocaleDateString('en-GB'));
        return (
            <div className='main'>
                <header>
                    <div className="container-fluid headerMain">
                        <nav className="headerNav">
                        </nav>
                        <div className="logoPlaceholder">
                            <img src={logo} alt="logo" className="logo"/>
                        </div>
                    </div>
                </header>

                <form className='page formMain' 
                    autoComplete="off" 
                    onSubmit={this.handleSubmit}
                    >

                    <div className="logInTitle">
                        <h1>Autentificare</h1>
                    </div>

                    <div className="fields" className="topForm">
                        <div className="bottomForm">
                            <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="E-mail"
                                    type="email"
                                    name="email"
                                    className="logInInput"
                                    margin="normal"
                                    variant="filled"
                                    onChange={this.updateField}
                                />
                            </div>

                            <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Parola"
                                    type="password"
                                    name="password"
                                    className="logInInput"
                                    margin="normal"
                                    variant="filled"
                                    onChange={this.updateField}
                                />
                            </div>
                        </div>
                        <div className="signUpBtnContainer">
                            {/* <Link to='/acasa'> */}
                              <button type="submit">Autentificare</button>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="container2">

                      <Link to="/creareCont"><span className="creareCont">
                        <a href="#" className="createAccountAnchor">Creare cont nou</a>
                        </span> </Link>

                        <label>
                            <input type="checkbox" name="remember" /> Aminteste-ti de mine
                    </label>
                        <span className="psw">Ai uitat <a className='forgotPasswordAnchor' href="#">parola?</a></span>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default withRouter(
    connect(mapStateToProps)(Login)
);
