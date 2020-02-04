import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import children from '../../assets/images/children.png';
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
            console.log('Snackbar should appear')
            alert('Ceva nu a mers bine, vă rugăm să vă verificați datele de acreditare!')
            this.setState({
                email: '',
                password: ''
            })
        })
        .then(res => {
            this.setState({
                flash: res.message.info
            })
            this.props.dispatch({
                type: "CREATE_SESSION",
                id: res.user.id,
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
        .catch(err => { 
            this.setState({
            message: err.message.info
        })
    })
    }

    render() {
        // console.log(this.props.auth)
        // console.log(new Date("2020-01-28T14:39:49.000Z").toLocaleDateString('en-GB'));
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
                
                <div className="loginPage">
                    
                    <div className="childrenImage"> 
                        <img src={children} alt="" className="ChildrenImage"/>
                    
                    </div>
            
                <div className="form">
                 
                <form className='page' onSubmit={this.handleSubmit} method="post" className="formMain" autoComplete="off">

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
                                    value={this.state.email}
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
                                    value={this.state.password}
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
                        </span> 
                    </Link>

                        <label>
                            <input type="checkbox" name="remember" /> Aminteste-ti de mine
                    </label>
                        <span className="psw">Ai uitat <a className='forgotPasswordAnchor' href="#">parola?</a></span>
                    </div>
                    
                    </form>
                </div>
               </div>

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
