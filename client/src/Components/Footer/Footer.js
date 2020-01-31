import React, { Component } from "react";
import "./Footer.scss";
import { AppBar,Typography } from "@material-ui/core";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
          <p class="text"> @2018 Ajungem Mari. Toate drepturile rezervate.</p>
          {/* <FontAwesomeIcon icon="facebook" /> */}
      </footer>
    );
  }
}

export default Footer;
