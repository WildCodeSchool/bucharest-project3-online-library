import React from 'react';

import Navbar from '../NavbarComponent/Navbar'
import UserHomeComponent from '../UserHomeComponent/UserHomeComponent';
import Footer from '../Footer/Footer';

class UserHomePageComplete extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <UserHomeComponent/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default UserHomePageComplete;