import React from 'react';

import Navbar from '../../Components/NavbarComponent/Navbar';
import PersonalProfile from '../../Components/PersonalProfile/PersonalProfile';
import Footer from '../../Components/Footer/Footer';
import { connect } from 'react-redux';

import './PersonalProfilePageComplete.scss';

class PersonalProfilePageComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    render(){
        console.log(this.props.auth)
        return(
            <div className="personalProfilePageContainer">
                <Navbar admin={this.props.admin}/>
                <PersonalProfile profile={this.props.auth}/>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps) (PersonalProfilePageComplete);