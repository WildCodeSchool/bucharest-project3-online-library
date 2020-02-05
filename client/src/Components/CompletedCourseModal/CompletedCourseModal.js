import React, { Component } from 'react';
import './CompletedCourseModal.css';
import Trophy from '../../assets/images/trophy.png';
const childrenquotes = require('../../assets/childrenquotes.json');


class CompletedComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: undefined,
        }
    }
    handleCloseClick = () => {
        this.props.onClose();
    }

    componentDidMount = () => {
        fetch('https://rocky-refuge-51400.herokuapp.com/auth/completedCourses/quotes',{
            method: "GET"
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    quote: json
                })
            })
    }

    render() {
        const { quote } = this.state;
        if(!quote){
            return null;
        }
        return (<div id="myModal" class="completedCourseModal">
            <div class="completedCourseModal-content">
                <div class="completedCourseModal-header">
                    <span onClick={this.handleCloseClick} class="completedCourseModal-close"> &times;</span>
                    <h2 class="completedCourseModal-text"> Bravo!</h2>
                </div>
                <div class="completedCourseModal-body">
                    <div class="completedCourseModal-image">
                        <img src={Trophy} alt='trophy' style={{ width: '30%', height: '30%', float: 'center' }} />
                    </div>
                    <p class="completedCourseModal-text1">{quote}</p>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
        )
    }
}




export default CompletedComp;