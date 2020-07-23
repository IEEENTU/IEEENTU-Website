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


// const Navbar = () => {
//   return (
//     <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/team">Team</Link>
//             </li>
//             <li>
//               <Link to="/events">Events</Link>
//             </li>
//             <li>
//               <Link to="/projects">Projects</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>
//   );
// }

// export default Navbar;

const IEEENav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar style={{backgroundColor: '#0ca3cc', fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif' }} light expand="md">
          <NavbarBrand href="/">IEEE</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Advancing Technology for Humanity</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
export default IEEENav;