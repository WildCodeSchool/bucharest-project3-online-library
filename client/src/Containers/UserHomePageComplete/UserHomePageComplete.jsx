import React from 'react';

import Navbar from '../../Components/NavbarComponent/Navbar';
import UserHomeComponent from '../../Components/UserHomeComponent/UserHomeComponent';
import Footer from '../../Components/Footer/Footer';

import { connect } from 'react-redux'

class UserHomePageComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: this.props.auth.firstname,
        };
      }

    render(){
        console.log(this.props.auth.firstname)
        return(
            <React.Fragment>
                <Navbar admin={this.props.admin}/>
                {this.props.admin ?
                    <UserHomeComponent userName={this.state.userName} admin={this.props.admin} profile={this.props.auth}/>
                :
                    <UserHomeComponent userName = {this.state.userName} profile={this.props.auth}/>
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

export default connect(mapStateToProps) (UserHomePageComplete);