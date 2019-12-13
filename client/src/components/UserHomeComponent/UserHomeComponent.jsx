import React from "react";
import CardComponent from "../CardComponent/CardComponent.jsx";
import  "../UserHomeComponent/UserHomeComponent.scss";

class UserHomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerColor: "#FA5457",
      chapterCard: "Chapter Title",
      textCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
      keywordsCard:
        "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
      date: "10.12.2019"
    };
  }

  render() {
    return (
      <div className='container'>
        <header className='headerContainer'>
    <h1 className='titleWelcome'>Hello {this.props.userName}</h1>
            <h2 className="subtitleWelcome">Here you have the recently added courses</h2>
        </header>
        <main className="mainContainer">
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
          />
          <CardComponent
            headerColor={this.state.headerColor}
            chapterCard={this.state.chapterCard}
            textCard={this.state.textCard}
            keywordsCard={this.state.keywordsCard}
            date={this.state.date}
          />
        </main>
      </div>
    );
  }
}

export default UserHomeComponent;
