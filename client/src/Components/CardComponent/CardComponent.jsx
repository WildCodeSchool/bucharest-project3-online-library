import React, { useEffect } from "react";
import "./CardComponent.scss";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CompletedComp from '../../Components/CompletedCourseModal/CompletedCourseModal';
import ConfirmationModal from '../../Components/ConfirmationModal/ConfirmationModal'

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerColor: "#FA5457",
      headerColorCompleted: "#A1BE95",
      disabled: true,
      isCompleted: false,
      done: false,
      buttonValue: 'Mark as completed',
      admin: false,
      openModal: false,
      openConfirmationModal: false,
      toDelete: false,
      buttonColor: 'inherit',
      classButton: 'uncompletedButton'
    };
  }

  componentDidMount = (prevProps, prevState) => {
    if(this.props.completedCourses !== undefined) {
    if(this.props.completedCourses.includes(this.props.courseId)){
      this.setState({ 
        isCompleted: true,
        disabled: false,
        classButton: 'completedButton',
        headerColor: "#A1BE95",
        done: true,
        buttonValue: 'COMPLETED',
        classButton: "completedButtonGreen"
      })
    }
  }
  }

  componentDidUpdate(prevProps){
    console.log("you're in componentDidUpdate boi")
    console.log(prevProps.completedCourses)
    console.log(this.props.completedCourses)
    if(prevProps.flag !== this.props.flag) {
      console.log("you're in componentDidUpdate boi 2")
      if(!this.props.completedCourses.includes(this.props.courseId)){
        console.log("you're in componentDidUpdate boi 3")
      this.setState({ 
        disabled: true,
        isCompleted: false,
        done: false,
        buttonValue: 'Mark as completed',
        admin: false,
        openModal: false,
        openConfirmationModal: false,
        toDelete: false,
        buttonColor: 'inherit',
        classButton: 'uncompletedButton'
      })
    } else if (this.props.completedCourses.includes(this.props.courseId)) {
      this.setState({ 
        isCompleted: true,
        disabled: false,
        classButton: 'completedButton',
        headerColor: "#A1BE95",
        done: true,
        buttonValue: 'COMPLETED',
        classButton: "completedButtonGreen"
    })
    }
  }
  }

  handleButtonCourseLink = () => {
    this.setState({ 
      isCompleted: true,
      disabled: false,
      classButton: 'completedButton'
    })
  }

  handleCompletedButton = () => {
    let courseData = {
      course_id: this.props.courseId,
      user_id: this.props.userId
    }
    if(this.state.buttonValue === 'Mark as completed') {
      fetch('https://rocky-refuge-51400.herokuapp.com/auth/completedCourses', {
        method: 'POST',
        headers: new Headers({
          'Content-type': 'application/json'
        }),
        body: JSON.stringify(courseData)
      })
      .then(res => {
        if(res.ok) {
          this.setState({
            openModal: true,
            buttonValue: 'COMPLETED',
            classButton: "completedButtonGreen",
            done:"#A1BE95"
          })
          return res.json()
        }
        else
          alert("Course couldn't be marked as complete, please try later")
          this.setState({
            buttonValue: "Mark as completed"
          })
      })
    }
  }

  handleClose = () => {
    this.setState({
      openModal: false
    })
  }

  handleCloseConfirmation = (flag) => {
    this.setState({
        openConfirmationModal: false,
        toDelete: flag
    })
  }

  deleteCourse = () => {
    this.setState({
      openConfirmationModal: true,
    })
  }

  render() {
    console.log(this.props.completedCourses)
    return (
        <div className='cardContainer' style={{display : this.state.toDelete ? 'none' : 'block'}}>
          <div
            className="headerCard"
            style={this.state.done ? { backgroundColor: "#A1BE95"} : { backgroundColor: this.props.headerColor }}
          >
  <span className="chapterTitle">{this.props.chapterCard}</span>
            <IconButton aria-label="delete" className='deleteButton'>
              <DeleteIcon className='deleteIcon' style={this.props.admin ? {} : { display: 'none' }} onClick={this.deleteCourse}/>
            </IconButton>
          </div>
          <div className="cardInfoWrapper">
            <p className="titleCcard">{this.props.titleCard}</p>
    <p className="textCard">{this.props.textCard}</p>
    <p className="keywordsCard">{this.props.keywordsCard}</p>
    <p className="dateAdded">Adaugat la: {this.props.date}</p>
            <div className="buttonContainer">
              <Button
                color="inherit"
                className='courseLinkButton'
                onClick={this.handleButtonCourseLink}
                href={this.props.link} 
                target="_blank"
              >
                Course Link
              </Button>
              <Button
                color="inherit"
                className={this.state.classButton} 
                onClick={this.handleCompletedButton}
                disabled={this.state.disabled}
              >
                {this.state.buttonValue}
              </Button>
          </div>
          {this.state.openModal &&
            <CompletedComp onClose={this.handleClose} />
          }

        </div>
          {this.state.openConfirmationModal &&
            <ConfirmationModal courseId={this.props.courseId} onClose={this.handleCloseConfirmation} />
          }
      </div>
    );
  }
}

export default CardComponent;