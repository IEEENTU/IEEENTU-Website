// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import IEEENav from './Navbar'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import Socials from './Socials'
// Do npm run build after making changes in order to see them
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Welcome to IEEE</h1> */}
        <IEEENav />
        <Main />
        {/* <Socials /> */}
      </div>
    );
  }
}

export default App;
