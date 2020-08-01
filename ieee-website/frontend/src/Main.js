import React from 'react';
import { Switch, Route } from 'react-router-dom';


import IEEENav from './Navbar';
import Socials from './Socials'

import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
    {/* Keep Home route at the END!! */}
    <Route path="/team">
            <Team />
            <Socials />
        </Route>
        <Route path="/about">
            <About />
            <Socials />
        </Route>
        <Route path="/contact">
            <Contact />
            <Socials />
        </Route>
        <Route path="/events">
            <Events />
            <Socials />
        </Route>
        <Route path="/projects">
            <Projects />
            <Socials />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        <Route>
            <IEEENav style={{transition: 'opacity 5s',zIndex:3}} />
            <Home />
        </Route>
        
        
        {/* <Route exact path="/events" component={Events} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} /> */}
        {/* <Route exact path="*" render={() => <Redirect to="/" />} /> */}
    </Switch>
  );
}

// function Home() {
//     return <h2>Home</h2>;
//   }
//   function Team() {
//     return <h2>The Team</h2>;
//   }
//   function About() {
//     return <h2>About</h2>;
//   }
  

export default Main;