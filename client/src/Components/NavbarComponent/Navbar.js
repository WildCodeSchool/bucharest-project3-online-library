import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../am-logo-retina.png'


class Navbar extends Component {
    render() {
        return (

            <header class="header">
                <img src={logo} alt="logo" className="logo"/>
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul class="menu">
                    <li><Link to="/acasa">Acasa</Link></li>
                    <li><Link to="/cursuri">Cursuri</Link></li>
                    <li><Link to="/profil">Profil</Link></li>
                    {this.props.admin ?
                    <li><Link to='/utilizatorii'>Toti utilizatorii</Link></li>
                        :
                    false
                    }
                </ul>
            </header>

        );
    }
}

export default Navbar;