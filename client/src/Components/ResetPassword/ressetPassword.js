import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import logo from '../../assets/images/logo.png';
import { withRouter } from "react-router";

import './ressetPassword.css';


class RessetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            display_message: false,
            failed: false
        }
    }

    updateField = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://rocky-refuge-51400.herokuapp.com/auth/password/' + this.state.email,
            {
                method: 'PUT',
                // headers: new Headers({
                //     'Content-type': 'application/json'
                // }),
            })
            .then(res => {
                console.log(res);
                       return res.json()}

            ).then(res => {
                if(res.indexOf('wrong')<0){
                console.log(res)
                this.setState({
                    display_message: true,
                    failed:false
                })
                setTimeout(() => {
                    this.props.history.replace('/')
                }, 5000)
            } else {
                this.setState({
                    display_message: false,
                    failed:true
                })
            }
            })

            
    }

    render() {
        return (
            <div className='main'>
                <header>
                    <div className="container-fluid headerMain">
                        <nav className="headerNav">
                        </nav>
                        <div className="logoPlaceholder">
                            <img src={logo} alt="logo" className="logo" />
                        </div>
                    </div>
                </header>

                <div className="loginPage">
                    <div className="form">


                        <form className='page' onSubmit={this.handleSubmit} className="formMain" autoComplete="off">

                            <div className="logInTitle">
                                <h1>Reseteaza parola</h1>
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

                                </div>
                                <div className="signUpBtnContainer">
                                    {/* <Link to='/acasa'> */}
                                    <button type="submit">Resetare</button>
                                    {/* </Link> */}
                                </div>
                                <div className="message">
                                <h2>{this.state.display_message?"Parola a fost resetata cu succes. Noua parola v-a fost trimisa pe email!":null}</h2>
                                <h2>{this.state.display_message?"Veti fi redirectionat catre pagina de autentificare in cateva secunde...":null}</h2>
                                <h2>{!this.state.display_message && this.state.failed?"Ceva nu a mers. Verifica daca ai scris adresa de mail corect":null}</h2>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(RessetPassword);