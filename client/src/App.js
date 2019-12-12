import React from 'react';
import './App.css';
import Navbar from './Components/NavbarComponent/Navbar';
import Footer from './Components/Footer';
import { Switch, Route } from 'react-router-dom';
import CompletedComp from './Components/CompletedComponent';
import PPInformationComponent from './Components/PPInformationComponent';

const Home = '';
const Courses = '';
const Profile = '';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ModalOpen: false }
  }
  HandleModal = () => {
    this.setState({ ModalOpen: true })

  }
  render() {
    console.log(this.state.ModalOpen);
    return (
      <div>
        {/* <button onClick={this.HandleModal} id="myBtn">Completed</button>
        <CompletedComp OpenModal={this.state.ModalOpen}>

        </CompletedComp>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Navbar />
        <Footer /> */}
        <PPInformationComponent/>
      </div>
    );
  }
}

export default App;
