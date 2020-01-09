import React,{Component} from 'react';
import './CompletedCourseModal.css';
import Trophy from '../../assets/images/trophy.png';


class CompletedComp extends Component {
    constructor(props) {
        super(props);
        this.state={ModalIsOpen: true} 
     }
     closeModal = () => {
        this.setState({ ModalIsOpen : false})
     }
      
render() {
    console.log(this.state.ModalIsOpen);
   return (this.props.OpenModal && this.state.ModalIsOpen ? 
     
        <div id="myModal" class="completedCourseModal">
            <div class="completedCourseModal-content">
                <div class="completedCourseModal-header">
                    <span onClick={this.closeModal} class="completedCourseModal-close"> &times;</span>
                    <h2 class="completedCourseModal-text"> Bravo!</h2>
                </div>
                <div class="completedCourseModal-body">
                    <div class="completedCourseModal-image">
                        <img src={Trophy} alt='trophy' style={{width:'30%', height:'30%',float:'center'}}/>
                    </div>
                    <p class="completedCourseModal-text1">citat despre copii</p>
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
  : null)
}
}




export default CompletedComp;