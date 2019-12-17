import React from 'react';

import Navbar from '../NavbarComponent/Navbar';
import UserHomeComponent from '../UserHomeComponent/UserHomeComponent';
import Footer from '../Footer/Footer';

class UserHomePageComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userName: 'Ana',
          admin: true
        };
      }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                {this.state.admin ?
                    <UserHomeComponent userName = {this.state.userName} admin={this.state.admin}/>
                :
                    <UserHomeComponent userName = {this.state.userName}/>
                }
              
                <Footer />
            </React.Fragment>
        );
    }
}

export default UserHomePageComplete;