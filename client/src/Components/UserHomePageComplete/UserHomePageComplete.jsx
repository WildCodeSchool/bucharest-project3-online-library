import React from 'react';

import Navbar from '../NavbarComponent/Navbar';
import UserHomeComponent from '../UserHomeComponent/UserHomeComponent';
import Footer from '../Footer/Footer';

class UserHomePageComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: 'Emilia',
        };
      }

    render(){
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

export default UserHomePageComplete;