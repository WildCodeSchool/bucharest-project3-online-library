import React from "react";
import CardComponent from "../src/components/CardComponent/CardComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerColor: "#FA5457",
      chapterCard: "Chapter Title",
      textCard:
        "Lorem ipsum dolor sit aliquet viverra. estibulum, quam et dignissim porttitor,diam erat varius est Lorem  Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit a. Duis congue.",
      keywordsCard:
        "Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.",
      date: "10.12.2019"
    };
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
