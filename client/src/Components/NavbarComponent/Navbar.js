import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Logo from './Images/Logo.png'


class Navbar extends Component {



    render() {
        return (

            <header class="header">
                <img src={Logo} alt='logo' class='logo'/>
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul class="menu">
                    <li><Link to="/">Acasa</Link></li>
                    <li><Link to="/courses">Cursuri</Link></li>
                    <li class="dropdown">
                         <a href="javascript:void(0)" class="dropbtn">Profil</a>
                    <div class="dropdown-content">
                        <Link to="/profile">Profilul Meu</Link>
                        <Link to="/profile">Delogare</Link>
                    </div>
                    </li>
                </ul>
            </header>

        );
    }
}
export default Navbar