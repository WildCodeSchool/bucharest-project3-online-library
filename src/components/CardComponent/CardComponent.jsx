import React from "react";

import "../CardComponent/CardComponent.scss";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerColor: "#FA5457",
      disabled: true,
      isCompleted: false,
      buttonValue: 'NOT COMPLETED', 
      admin: false
    };
  }

  handleButtonCourseLink = () => {
    this.setState({ 
      isCompleted: true,
      disabled: false
    })
  }

  handleCompletedButton = () => {
    if(this.state.buttonValue === 'NOT COMPLETED') {
      this.setState({
        buttonValue: 'COMPLETED'
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="cardContainer">
          <div
            className="headerCard"
            style={{ backgroundColor: this.state.headerColor }}
          >
            <span className="chapterTitle">Chapter Title</span>
            <IconButton aria-label="delete" className='deleteButton'>
              <DeleteIcon className='deleteIcon' style={this.state.admin ? {} : { display: 'none' }}/>
            </IconButton>
          </div>
          <div className="cardInfoWrapper">
            <p className="titleCcard">Title Card</p>
            <p className="textCard">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              congue eros egestas aliquet viverra. Mauris feugiat ultrices odio
              variualiqua. Curabitur vestibulum, quam et dignissim porttitor,
              diam erat varius est Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris
              feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et
              dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Duis congue.{" "}
            </p>
            <p className="keywordsCard">
              Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fusce
              nec tempus dolor, eu egestas magna. eu egestas magna.
            </p>
            <p className="dateAdded">Adaugat: 10.12.2019</p>
            <div className="buttonContainer">
              <Button
                color="inherit"
                className="courseLinkButton"
                onClick={this.handleButtonCourseLink}
              >
                Course Link
              </Button>
              <Button
                color="inherit"
                className="completedButton"
                onClick={this.handleCompletedButton}
                disabled={this.state.disabled}
              >
                {this.state.buttonValue}
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardComponent;