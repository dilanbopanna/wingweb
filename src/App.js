import React, {Component ,useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactNavbar from "react-responsive-animate-navbar";
import { Button, Nav, Navbar } from 'react-bootstrap';
import AboutPage from './containers/Aboutpage'
import HomePage from './containers/HomePage'
import EventPage from './containers/EventPage'
import ProjectPage from './containers/ProjectPage'
import PublicationPage from './containers/PublicationPage'
import TeamPage from './containers/TeamPage'
import GalleryPage from './containers/GalleryPage'
import logo from './assests/images/wing_logo.png'

import Container from 'react-bootstrap/Container';
import {Header, Layout, Navigation, Drawer, Content} from 'react-mdl'


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
class App extends Component {
    
  render() {

   
    return (
    
    
      <Router>
        <div className="App"> 
          
         {/* <Navbar className="v" bg="transparent" >
          <Navbar.Brand><a href="/" class='logo'><img class='logo-img'src={logo} alt='wing-logo'></img></a>
          </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
    <Nav className="ml-auto">*/}
        
        <Navbar collapseOnSelect bg="transparent" expand="lg">
        <Navbar.Brand href="/">
            <img class='logo-img'src={logo} alt='wing-logo'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
        

    <Nav.Link class=" nav-link " href="/">
                Home
                </Nav.Link>
                <Nav.Link class=" nav-link"href="/about">
                About
                </Nav.Link>
                <Nav.Link class=" nav-link" href="/event">
                Events
                </Nav.Link>
                <Nav.Link class=" nav-link" href="/project">
                Projects
                </Nav.Link>
                <Nav.Link class=" nav-link" href="/publication">
              Publications
                </Nav.Link>
                <Nav.Link class=" nav-link" href="/team">
               Team
                </Nav.Link>
                <Nav.Link class=" nav-link" href="/gallery">
  Gallery
  </Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Navbar>
               
               
            {/*  </Nav>
            </Navbar.Collapse>
        
            </Navbar>*/}
          
<Switch>
          <Route exact path="/" component={HomePage}></Route> 
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/event" component={EventPage}></Route>
          <Route exact path="/project" component={ProjectPage}></Route>
          <Route exact path="/publication" component={PublicationPage}></Route>
          <Route exact path="/team" component={TeamPage}></Route>
          <Route exact path="/gallery" component={GalleryPage}></Route>
          
          </Switch>
                 
</div>
      </Router>
    
    );
  }
}

export default App;