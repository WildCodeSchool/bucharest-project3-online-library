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

  deleteCourse = (cardToDelete) => {
      this.props.toDelete(cardToDelete)
      console.log('btn clicked')
  }

  render() {
    return (
      <React.Fragment>
        <div className="cardContainer">
          <div
            className="headerCard"
            style={{ backgroundColor: this.props.headerColor }}
          >
  <span className="chapterTitle">{this.props.chapterCard}</span>
            <IconButton aria-label="delete" className='deleteButton'>
                {/* CHANGED style={this.state.admin} into style={this.props.admin} */}
              <DeleteIcon className='deleteIcon' style={this.props.admin ? {} : { display: 'none' }} 
                    onClick={() => this.deleteCourse(this.props.i)}/>
                {/* CHANGED style={this.state.admin} into style={this.props.admin} */}
            </IconButton>
          </div>
          <div className="cardInfoWrapper">

              {/* PROPS ADDED FOR TITLE CARD */}

            <p className="titleCcard">{this.props.titleCard}</p>

              {/* PROPS ADDED FOR TITLE CARD */}

    <p className="textCard">{this.props.textCard}</p>
    <p className="keywordsCard">{this.props.keywordsCard}</p>
    <p className="dateAdded">Adaugat: {this.props.date}</p>
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