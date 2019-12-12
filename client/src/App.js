import React from 'react';
import UserHomeComponent from '../src/components/UserHomeComponent/UserHomeComponent';
import '../src/components/UserHomeComponent/UserHomeComponent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Ana'
    };
  }

  render() {
    return(
      <UserHomeComponent userName = {this.state.userName}/>
    );
  }
}

export default App;
