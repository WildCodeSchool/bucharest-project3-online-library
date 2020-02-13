import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import logo from '../../assets/images/logo.png';
import './ressetPassword.css';


class RessetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            display_message: ''
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
                console.log(res)
                this.setState({
                    display_message: res
                })
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

                        <h1>Message:{this.state.display_message}</h1>

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
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default RessetPassword;