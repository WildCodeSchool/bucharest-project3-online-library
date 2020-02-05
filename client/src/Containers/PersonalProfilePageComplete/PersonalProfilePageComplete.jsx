import React from 'react';

import Navbar from '../../Components/NavbarComponent/Navbar';
import PersonalProfile from '../../Components/PersonalProfile/PersonalProfile';
import Footer from '../../Components/Footer/Footer';
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router";

import './PersonalProfilePageComplete.scss';

class PersonalProfilePageComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    render(){
        console.log('local storage from all users table : ' + localStorage.getItem('userToken'))
        if(!this.props.auth.token && localStorage.getItem('userToken') !== null) {
          this.props.auth.token = localStorage.getItem('userToken')
          this.props.auth.email = localStorage.getItem('userEmail')
          this.props.auth.password = localStorage.getItem('userPassword')
          this.props.auth.firstname = localStorage.getItem('userName')
          this.props.auth.lastname = localStorage.getItem('userLastname')
          this.props.auth.volunteering_county = localStorage.getItem('userCounty')
          this.props.auth.volunteering_center = localStorage.getItem('userCenter')
          this.props.auth.contract_number = localStorage.getItem('userContractNumber')
          this.props.auth.date_joined = localStorage.getItem('userDateJoined')
          this.props.auth.phonenumber = localStorage.getItem('userPhoneNumber')
          this.props.auth.token = localStorage.getItem('userToken')
          this.props.auth.id = localStorage.getItem('userId')
          this.props.auth.access_level = localStorage.getItem('userAccessLevel')
        }
        if(!this.props.auth.token) this.props.history.push('/')
        console.log(this.props.auth)
        return(
            <div className="personalProfilePageContainer">
                <Navbar admin={this.props.auth.access_level}/>
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

export default withRouter(connect(mapStateToProps) (PersonalProfilePageComplete));