import React from 'react';
import UserHomeComponent from '../src/components/UserHomeComponent/UserHomeComponent'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstName: 'Ana'
    };
  }
  render() {
    return(
      <UserHomeComponent props={this.state.userFirstName}/>
    );
  }
}

export default App;
