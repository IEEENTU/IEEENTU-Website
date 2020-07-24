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
        <Navbar style={{zIndex: 3, backgroundColor: '#066e94', fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif', color:'white' }} dark expand="md">
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
                <NavLink style={{fontFamily: 'Muli'}} href="/projects">Projects</NavLink>
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