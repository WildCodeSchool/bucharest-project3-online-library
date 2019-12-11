import React,{Component} from 'react';
import './CompletedComponent.scss';
import Trophy from './images/trophy.png';


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
     
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span onClick={this.closeModal} class="close"> &times;</span>
                    <h2 class="text"> Bravo!</h2>
                </div>
                <div class="modal-body">
                    <div class="image">
                        <img src={Trophy} alt='trophy' style={{width:'30%', height:'30%',float:'center'}}/>
                    </div>
                    <p class="text1">citat despre copii</p>
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
  : null)
}
}




export default CompletedComp;