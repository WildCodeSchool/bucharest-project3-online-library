import React from 'react';

import SignUp from '../SignUp/SignUp';
import Footer from '../Footer/Footer';

class SignUpPageComplete extends React.Component {
    render(){
        return(
            <React.Fragment>
                <SignUp/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default SignUpPageComplete;