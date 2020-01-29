import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import children from '../../assets/images/children.png';
import './Login.css';

class Login extends Component {
    render() {
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
                <div>
                    <div className="childrenImage"> 
                        <img src={children} alt="" className="childrenImage"/>
                    
                    
                    </div>
             <div>  <form className='page' action="action_page.php" method="post" className="formMain" autoComplete="off">

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
                            <Link to='/acasa'>
                              <button type="submit">Autentificare</button>
                            </Link>
                        </div>
                    </div>
                   

                    {/* Nice to have */}

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
               </div>
            </div>
        )
    }
}
export default Login;
