import React, { Component } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';


class Navbar extends Component {



    render() {
        return (

            <header class="header">
                <a href="https://dummyimage.com/71x31/b5acb5/4f344f.png&text=LOGO" class="logo">LOGO</a>
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <ul class="menu">
                    <li><Link to="/acasa">Home</Link></li>
                    <li><Link to="/cursuri">Courses</Link></li>
                    <li><Link to="/profil">Profile</Link></li>
                </ul>
            </header>

        );
    }
}

export default Navbar;