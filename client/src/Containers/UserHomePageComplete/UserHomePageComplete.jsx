import React from 'react';

import Navbar from '../../Components/NavbarComponent/Navbar';
import UserHomeComponent from '../../Components/UserHomeComponent/UserHomeComponent';
import Footer from '../../Components/Footer/Footer';

import { connect } from 'react-redux'
import { withRouter, Redirect } from "react-router";

class UserHomePageComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: this.props.auth.firstname,
        };
      }

    render(){
        if(!this.props.auth.token) this.props.history.push('/')
        console.log(this.props.auth.firstname)
        return(
            <React.Fragment>
                <Navbar admin={this.props.admin}/>
                {this.props.admin ?
                    <UserHomeComponent userName = {this.state.userName} admin={this.props.admin}/>
                :
                    <UserHomeComponent userName = {this.state.userName}/>
                }
                <Footer />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps) (UserHomePageComplete));