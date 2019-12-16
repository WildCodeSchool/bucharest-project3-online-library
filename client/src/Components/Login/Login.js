import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className='main'>
                <header>
                    <div className="container-fluid headerMain">
                        <nav className="headerNav">
                        </nav>
                        <div className="logoPlaceholder">
                            <img src="https://via.placeholder.com/157x45" alt="logo"/>
                        </div>
                    </div>
                </header>

                <form className='page' action="action_page.php" method="post" className="formMain" autoComplete="off">

                    <div className="logInTitle">
                        <h1>Logare</h1>
                    </div>

                    <div className="fields" className="topForm">
                        <div className="bottomForm">
                            <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="E-mail"
                                    type="email"
                                    className="logInInput"
                                    margin="normal"
                                    variant="filled"
                                />
                            </div>

                            <div className="row">
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Parola"
                                    type="password"
                                    className="logInInput"
                                    margin="normal"
                                    variant="filled"
                                />
                            </div>
                        </div>

                        <div className="signUpBtnContainer">
                            <button type="submit">Logare</button>
                        </div>
                    </div>
                   

                    {/* Nice to have */}

                    <div className="container2">
                    <span className="creareCont"><a href="#">Creare cont nou</a></span>
                        <label>
                            <input type="checkbox" name="remember" /> Aminteste-ti de mine
                    </label>
                        <span className="psw">Ai uitat <a href="#">parola?</a></span>
                    </div>
                    
                    </form>
               
            </div>
        )
    }
}
export default Login;
