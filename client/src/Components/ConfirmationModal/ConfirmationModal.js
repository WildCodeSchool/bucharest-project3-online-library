import React, { Component } from 'react';
import './ConfirmationModal.css';

class ConfirmationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleCloseClickAndDelete = () => {
        fetch('/auth/courses/'+ this.props.courseId, {
            method: 'DELETE'
        })
        .then(res => res.json())
        this.props.onClose(true);
    }

    handleCloseClick = () => {
        this.props.onClose(false);
    }

    render() {
        console.log("You're in the confirmation modal for deletion")
        return (
        <div id="myModal" class="confirmationModal">
            <div class="completedCourseModal-content">
                <h2>Ești pe cale să ștergi acest curs, această acțiune este ireversibilă. 
                    <br/>Doriți să continuați ?</h2>
                <div class="modal-footer">
                    <button 
                    onClick={this.handleCloseClickAndDelete}
                    >
                        Da
                    </button>
                    <button 
                    onClick={this.handleCloseClick}
                    >
                        Nu
                    </button>
                </div>
            </div>
        </div>
   
        )
    }
}




export default ConfirmationModal;