import React from 'react';
import './ProfileCourseCard.css';

class ProfileCourseCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname : ''
        }
    }

    render(){
        return(
            <div className="profileCourseCardMain">
                <header>
                    <h3>
                        {this.props.title}
                    </h3>
                </header>

                <div className="profileCourseCardBody">
                    <h4>
                        {this.props.description}
                    </h4>
                    <button>
                        <a href={this.props.link}>Link catre curs</a>
                    </button>
                </div>
            </div>
        )
    }
}

export default ProfileCourseCard;