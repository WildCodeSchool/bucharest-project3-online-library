import React from 'react';
import UserCardComponent from '../src/components/UserHomeComponent/UserHomeComponent';
import '../src/components/UserHomeComponent/UserHomeComponent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <UserCardComponent/>
    );
  }
}

export default App;
