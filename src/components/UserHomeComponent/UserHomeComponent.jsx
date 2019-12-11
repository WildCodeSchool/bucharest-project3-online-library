import React from 'react';
import CardComponent from '../CardComponent/CardComponent';

class UserHomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerColor: "#FA5457",
      chapterCard: 'Chapter Title',
      textCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odi variualiqua. Curabitur vestibulum, quam et dignissim porttitor,diam erat varius est Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue eros egestas aliquet viverra. Mauris feugiat ultrices odio variualiqua. Curabitur vestibulum, quam et dignissim porttitor, diam erat varius est, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue.",
      keywordsCard: 'Fusce nec tempus dolor, eu egestas magna. eu egestas magna. Fuscenec tempus dolor, eu egestas magna. eu egestas magna.',
      date: '10.12.2019'
    };
  }

  render() {
    return(
        <CardComponent 
          headerColor={this.state.headerColor} 
          chapterCard={this.state.chapterCard} 
          textCard={this.state.textCard}
          keywordsCard={this.state.keywordsCard}
          date={this.state.date}
        />
    );
  }qs
}

export default UserHomeComponent;
