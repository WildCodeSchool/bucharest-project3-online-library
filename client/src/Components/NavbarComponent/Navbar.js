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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li class="dropdown">
                         <a href="javascript:void(0)" class="dropbtn">Profile</a>
                    <div class="dropdown-content">
                        <Link to="/profile">My Profile</Link>
                        <Link to="/profile">Sign Out</Link>
                    </div>
                    </li>
                </ul>
            </header>

        );
    }
}
export default Navbar