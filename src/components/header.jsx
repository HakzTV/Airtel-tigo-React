import React, { useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav, NavDropdown, Button ,Offcanvas, Container, Modal } from 'react-bootstrap';
import '../scss/header.scss'
import logo from '../assets/logo.jpg';
import MultiStepForm from './MultiStepForm';
import bg from '../assets/bg5.png'
function Header() {
  // Use State Hooks to handle the states foe the mobile navigation menu
  const [showMenu, setShowMenu] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // function to handle menu display

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  // Function to make overlay diplay and disappear as well as adding toggle menu to make the menu toggle on mobile
  const handleOverlayClick = () => {
    setIsOverlayVisible(false); // Hide the overlay when clicked
    toggleMenu(); // Close the menu
  };

  const toggleEverything = ()=>{
    setIsOverlayVisible(true); // Show the overlay when clicked
    toggleMenu(); // Toggle the menu
  };

  // Function to handle form toggling
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    // Navigation bar
    <nav className="navbar bg-custom">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar__button-group">
      {/* Button that displays form when clicked */}
        <button className="navbar__button btn-danger " onClick={toggleForm}>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        
        Get your  eSIM</button>
        {/* Button that display navigation menu */}
        <button className="navbar__offcanvas" onClick={toggleEverything}>
        
          <span className="navbar__offcanvas-icon">
          {/* Custom svg for mobile view */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
              <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
            </svg>
          </span>
          
        </button>
        {/* Handling the function with the div */}
        {isOverlayVisible && <div className="overlay" onClick={handleOverlayClick} />}
        {/* Add the onClick handler to the overlay */}
      </div>
      {/* Nav links */}
      <ul className={`navbar__links ${showMenu ? 'navbar__links--show' : ''}`}>
        <li className="navbar__links-link">
          <a href="/">Home</a>
        </li>
        <li className="navbar__links-link">
          <a href="#aboutEsim">About AirteTigo eSIM</a>
        </li>
        <li className="navbar__links-link">
          <a href="#eSimOffers">eSim Bundle Offers</a>
        </li>
        <li className="navbar__links-link">
          <a href="#faqs">FAQ</a>
        </li>
      </ul>
      <button className="navbar__button btn-danger funs" onClick={toggleForm}>
        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        
        Get your  eSIM</button>

      {/* Modal form pop up  */}
      <Modal show={showForm} onHide={toggleForm} >
      <Modal.Header closeButton style={{ backgroundImage:`url(${bg})` }}>
        <Modal.Title className='text-white' >Register for AirtelTigo eSIM</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-white'>
        <p>
        Welcome to the AirtelTigo eSIM registration portal. This allows you to get your eSIM QR code from the comfort of your home.
Follow the steps below to complete the process.
        </p>
        <MultiStepForm onClose={toggleForm} />
      </Modal.Body>
    </Modal>
    </nav>
  );
}


// function Header() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isOverlayVisible, setIsOverlayVisible] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleOverlayClick = () => {
//     setIsOverlayVisible(false);
//     toggleMenu();
//   };

//   const toggleEverything = () => {
//     setIsOverlayVisible(true);
//     toggleMenu();
//   };

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <nav className="navbar bg-custom">
//       <div className="navbar__logo">
//         <img src={logo} alt="Logo" />
//       </div>
//       <div className="navbar__button-group">
//         <button className="navbar__button btn-danger" onClick={toggleForm}>
//           <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
//           Get your free eSIM
//         </button>
//         <button className="navbar__offcanvas" onClick={toggleEverything}>
//           <span className="navbar__offcanvas-icon">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
//                 fill="currentColor"
//               />
//               <path
//                 opacity="0.3"
//                 d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14Z"
//                 fill="currentColor"
//               />
//               <path
//                 opacity="0.3"
//                 d="M21 21H3C2.4 21 2 20.6 2 20V18C2 17.4 2.4 17 3 17H21C21.6 17 22 17.4 22 18V20C22 20.6 21.6 21 21 21Z"
//                 fill="currentColor"
//               />
//             </svg>
//           </span>
//         </button>
//         <Offcanvas show={isOverlayVisible} onHide={handleOverlayClick} placement="end">
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Menu</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className="flex-column">
//               <Nav.Link href="#">Home</Nav.Link>
//               <Nav.Link href="#">About</Nav.Link>
//               <Nav.Link href="#">Contact</Nav.Link>
//               </Nav>
//               </Offcanvas.Body>
//     </Offcanvas>
//     <Modal show={showForm} onHide={toggleForm}>
//       <Modal.Header closeButton>
//         <Modal.Title>Get your free eSIM</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <MultiStepForm onClose={toggleForm} />
//       </Modal.Body>
//     </Modal>
//   </div>
// </nav>
// );
// }


export default Header;