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
                        {this.props.chapterTitle}
                    </h3>
                </header>

                <div className="profileCourseCardBody">
                    <h4>                    
                        {this.props.courseTitle}
                    </h4>
                    <button>
                        <a href={this.props.courseLink}>Link to Course</a>
                    </button>
                </div>
            </div>
        )
    }
}

export default ProfileCourseCard;