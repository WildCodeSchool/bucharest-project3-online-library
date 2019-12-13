import React from 'react';

import Login from '../Login/Login';
import Footer from '../Footer/Footer';

class LoginPageComplete extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Login/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default LoginPageComplete;