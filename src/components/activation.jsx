import React, { useState } from "react";
import '../scss/activation.scss'
import { Modal, Button } from "react-bootstrap";

const ActivationComponent = () => {
    // State hook for modal
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    // functions to handle the state of the modal
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const closeModal = () => setShowModal2(false);
    const showTheModal = () => setShowModal2(true);
  
    // Function to show modal
    const handleClick = () => {
      handleShowModal();
    };
    const handleModalDisplay = () => {
        showTheModal();
      };
    
    return ( 
        // Activation section of the page
        <div className="wrapper">

            <div className="activation ">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6 pe-lg-16 mb-10 mb-lg-0">
                        <div className="rounded landing-dark-border p-9 mb-10">

                            <div className="content-1">
                                <h2>How to activate your E-SIM on an Android smartphone?</h2>
                                <span><a href="#" onClick={handleClick} className="pop-up-button">Click for steps</a></span>
                            </div>
                            <div className="content-1">
                                <h2>How to activate your E-SIM on an Apple smartphone?</h2>
                                <span><a href="#" className="pop-up-button" onClick={handleModalDisplay}>Click for steps</a></span>
                            </div>  
                        </div>
                        </div>

                        <div className="col-lg-6 pad" >
                        <div className="wraps d-flex gap-custom">

                            <div className="d-flex flex-column">
                                <a href="#" className="mb-3 text-white opacity-50 dec">Home</a>
                                <a href="#" className="mb-3 text-white opacity-50 dec">About AirtelTigo eSim</a>
                                <a href="#" className="mb-3 text-white opacity-50 dec">eSIM Bundle Offers</a>
                                <a href="#" className="mb-3 text-white opacity-50 dec">FAQs</a>
                                <a href="#" className="mb-3 text-white opacity-50 dec">Get your free eSIM</a>
                                <a href="https://www.airteltigo.com.gh/learn-more/airteltigo-eSIM-terms-and-conditions" target="_blank" className="mb-3 text-white opacity-50 dec">Terms and Conditions</a>
                                <a href="https://www.airteltigo.com.gh/privacy-policy/eSIM-privacy-policy" target="_blank" className="mb-3 text-white opacity-50 dec">Privacy Policy</a>

                            </div>
                            <div className="d-flex flex-column decd">
                                <h4 className="red">Stay Connected</h4>

                                <a href="https://www.facebook.com/airteltigoghana/" target="_blank" className="dec text-white opacity-50 text-hover-primary fs-5 mb-3">
                                Facebook
                                
                                </a>
                                <a href="https://www.instagram.com/airteltigoghana/" target="_blank" className="dec text-white opacity-50 text-hover-primary fs-5 mb-3">
                                Instagram                       </a>
                                <a href="https://twitter.com/airteltigoghana" target="_blank" className="dec text-white opacity-50 text-hover-primary fs-5 mb-3" >
                                Twitter
                                </a>
                                <a href="https://www.youtube.com/channel/UCkymmuTfwq8ULFrGYnT_pqA" target="_blank" className="dec text-white opacity-50 text-hover-primary fs-5 mb-3">
                                YouTube
                                </a>
                                <a href="https://www.linkedin.com/company/airteltigo-ghana/" target="_blank" className="dec text-white opacity-50 text-hover-primary fs-5 mb-3">

                               Linkedin
                                </a>
                

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    <Modal show={showModal} onHide={handleCloseModal}>
    <div className="modal-size">
    <Modal.Header closeButton className="step-title">
      <Modal.Title >Steps to install eSIM on Android</Modal.Title>
    </Modal.Header>
    <Modal.Body className="step-modal d-flex flex-column ">
      <ol className="w-100">
        <li>
      <span className="bullet bullet-vertical me-3"></span>
        Choose "settings", then "connections"
        </li>
        <li>
      <span className="bullet bullet-vertical bg-danger me-3"></span>
        Choose "SIM card manager" and then select "add E-SIM plan".
        </li>
        <li>
      <span className="bullet bullet-vertical bg-success me-3"></span>
        Choose "add using the QR code" and then scan your unique QR code.
        </li>
        <li>
      <span className="bullet bullet-vertical  bg-info me-3"></span>
        In the event where you have challenges downloading with the QR code, there's an option for activation code which will be sent to your mail.
        </li>
     
      </ol>
    </Modal.Body>
    </div>
  </Modal>
  <Modal show={showModal2} onHide={closeModal}>
  <div className="modal-size">
  <Modal.Header closeButton className="step-title">
      <Modal.Title >Steps to install eSIM on IOS</Modal.Title>
    </Modal.Header>
    <Modal.Body className="step-modal d-flex flex-column">
      <ol>
        <li>
      <span className="bullet bullet-vertical me-3"></span>
        Go to settings, then choose "mobile data".
        </li>
        <li>
      <span className="bullet bullet-vertical bg-danger me-3"></span>
        Select "add E-SIM" or "Add Data Plan" and then scan the activation QR code 
        </li>
        <li>
      <span className="bullet bullet-vertical bg-success me-3"></span>
      Confirm cellular plan, accept final prompts, and choose “default line”.
        </li>
        <li>
      <span className="bullet bullet-vertical bg-info me-3"></span>

      In the event where you have challenges downloading with the QR code, there’s an option to enter the following information manually. (Activation code SM-DP+ Address)
        </li>
        <li>
      <span className="bullet bullet-vertical bg-light me-3"></span>
      Go to default line and “choose secondary” 
        </li>
        <li>
      <span className="bullet bullet-vertical bg-danger me-3"></span>
      iMessage and Facetime, “choose secondary”
        </li>
        <li>
      <span className="bullet bullet-vertical bg-info me-3"></span>
      Cellular data, “choose secondary”
        </li>
      </ol>
    </Modal.Body>
  </div>
 </Modal>
        </div>
     );
}
 
export default ActivationComponent;