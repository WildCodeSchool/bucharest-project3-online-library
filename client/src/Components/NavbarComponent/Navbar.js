import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';

import { withRouter, Redirect } from "react-router";

class Navbar extends Component {

 logout = () => {
    this.props.dispatch({
        type: "CREATE_SESSION",
        token: null
    })
    this.props.history.push('/')
 }

    render() {
        return (


            <header class="header">
                <img src={logo} alt="" className="logo"/>
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                {this.props.home ? 
                false 
                :
                <ul class="menu">
                    <li><Link to="/acasa">Acasa</Link></li>
                    <li><Link to="/cursuri">Cursuri</Link></li>
                    <li><Link to="/profil">Profil</Link></li>
                    <li><a onClick={this.logout}>Delogare</a></li>
                    {this.props.admin ?
                    <li><Link to='/utilizatorii'>Toti utilizatorii</Link></li>
                        :
                    false
                    }
                </ul>
                }
                
            </header>

        );
    }
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default withRouter(
    connect(mapStateToProps)(Navbar)
);