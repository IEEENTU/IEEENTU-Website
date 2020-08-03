import React,{useState} from 'react';
import { Link } from 'react-router-dom';

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



const IEEENav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar style={{ backgroundColor: '#066e94', fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif', color:'white' }} dark expand="md">
          <NavbarBrand style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif', color:'white'}} href="/">IEEE</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink style={{fontFamily: 'Muli'}} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily: 'Muli'}} href="/about">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily: 'Muli'}} href="/team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily: 'Muli'}} href="/events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled style={{fontFamily: 'Muli'}} href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{fontFamily: 'Muli'}} href="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
            <NavbarText style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif', color:'white'}}>Advancing Technology for Humanity</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
export default IEEENav;