import React from 'react';

import Navbar from '../NavbarComponent/Navbar';
import PersonalProfile from '../PersonalProfile/PersonalProfile';
import Footer from '../Footer/Footer';

import './PersonalProfilePageComplete.scss';

class PersonalProfilePageComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    render(){
        return(
            <div className="personalProfilePageContainer">
                <Navbar admin={this.props.admin}/>
                <PersonalProfile/>
                <Footer />
            </div>
        );
    }
}

export default PersonalProfilePageComplete;