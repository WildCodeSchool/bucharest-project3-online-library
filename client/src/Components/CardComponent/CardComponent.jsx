import React from "react";
import "./CardComponent.scss";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CompletedComp from '../../Components/CompletedCourseModal/CompletedCourseModal';

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
      toDelete: false,
      buttonColor: 'inherit',
      classButton: 'uncompletedButton'
    };
  }

  componentDidUpdate = () => {
    console.log(this.props.completedCourses)
    console.log(this.props.courseId)
    if(this.props.completedCourses !== undefined) {
    if(this.props.completedCourses.includes(this.props.courseId) && this.state.done == false) {
      console.log("this.props.completedCourses == this.props.courseId" + this.props.courseId)
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
    console.log(courseData)
    if(this.state.buttonValue === 'Mark as completed') {
      fetch('/auth/completedCourses', {
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
            classButton: "completedButtonGreen"
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

  deleteCourse = () => {
    this.setState({
      toDelete : true
    })
  }

  
  render() {
    console.log("completedCourses : " + this.props.completedCourses)
    console.log("course id : " + this.props.courseId)
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
        </div>
        <CompletedComp OpenModal={this.state.openModal} />
      </div>
    );
  }
}

export default CardComponent;