import React, { useState } from 'react';  

import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../scss/faq.scss'
import bg from '../assets/bg5.png'
import { RecommendFriend } from './MultiStepForm';
import '../scss/pricing.scss'


const FaqComponent = () => {
	const [showForm, setShowForm] = useState(false);

	 // Function to handle form toggling
	 const toggleForm = () => {
		setShowForm(!showForm);
	  };
    return ( 
		// Container for the whole section
		<div id='faqs'>

        <div className="container faqsection">

		{/* Title */}
       <Container className='mx-5 my-5'>
       				<h3 className="headline fs-2hx mb-5 text-center" id="faqs" >Frequently Asked Questions</h3>

       <Row >
	   {/* Content Columns */}
       <Col md={4} gap={2}>
        	<div className="mb-4">
					<div className="mb-6 stars">
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
					</div>
						
					<div className="headline2 fs-5 fw-bold mb-3 b">
					1.	Can one use eSIM in Ghana?
								<br />
					</div>
					<div className="text-gray-800 ">
					Yes. AirtelTigo has introduced the eSIM service in Ghana for the first time and any customer with an eSIM-enabled device can use the eSIM service.
					<span> 
						<a href="#" className="menu-link px-2 text-danger text-hover-danger">.....Read More.</a>
					</span>
					</div>
			</div>
        </Col>
       <Col md={4} >
            <div className="mb-4">
				<div className="mb-6 stars">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
				</div>
						
				<div className="headline2 fs-5 fw-bold mb-3 b">2. Who qualifies for eSIM functionality?
					<br /></div>
				<div className="text-gray-800 ">Anyone with an eSIM-enabled device. However, locked phones are not eligible and cannot download the profile information.<span> <a href="#" className="menu-link px-2 text-danger text-hover-danger">.....Read More.</a></span></div>
						</div>
        </Col>
        <Col md={4} >
            <div className="mb-4">
				<div className="mb-6 stars">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
				</div>
						
				<div className="headline2 fs-5 fw-bold mb-3 b">3. Where can I find my eSIM activation code?
					<br /></div>
				<div className="text-gray-800 ">The eSIM activation code is provided by AirtelTigo. This can be a printed or code can be sent to you as a PDF file.<span> <a href="#" className="menu-link px-2 text-danger text-hover-danger">.....Read More.</a></span></div>
						</div>
        </Col>
       
       </Row>
        <Row className='mt-5'>

        <Col md={4} >
            <div className="mb-4">
				<div className="mb-6 stars">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
				</div>
						
				<div className="headline2 fs-5 fw-bold mb-3 b">4.	How to know if a smartphone is eSIM enabled?
					<br /></div>
				<div className="text-gray-800 ">Smartphone users can dial *#06# to check whether their devices support eSIM or not; phones supporting eSIM will show a barcode with 'EID' at the beginning of the code on the screen.<span> <a href="#" className="menu-link px-2 text-danger text-hover-danger">.....Read More.</a></span></div>
						</div>
        </Col>
        <Col md={4} >
            <div className="mb-4">
				<div className="mb-6 stars">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
				</div>
						
				<div className="headline2 fs-5 fw-bold mb-3 b">5.How many eSIM profiles can you download on a device?
					<br /></div>
				<div className="text-gray-800 ">You can store as many eSIM profiles on your eSIM as your smartphone allows, but only one of the uploaded eSIM profiles can be activated at a particular time. In the case of the new iPhone 14, you can have two profiles working at the same time.<span> <a href="#" className="menu-link px-2 text-danger text-hover-danger">.....Read More.</a></span></div>
						</div>
        </Col>

        <Col md={4} >
            <div className="mb-4">
				<div className="mb-6 stars">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
				</div>
						
				<div className="headline2 fs-5 fw-bold mb-3 b">6. Can you swap a physical SIM for an eSIM?
					<br /></div>
				<div className="text-gray-800 ">Yes. You can swap your network from a physical SIM to an eSIM if the smartphone or device supports eSIM.<span> <a href="#" className="menu-link px-2 text-danger text-hover-danger">.....Read More.</a></span></div>
						</div>
        </Col>
        </Row>
    
   {/* Pop up  */}
		<div className={`pop-up d-flex flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-12 mb-n5 mb-lg-n13 container ${window.innerWidth <= 450 ? 'mobile' : ''}`}>
        
        <div className="content">
            <div className='fs fw-bold text-white mb-2'>Enjoy the benefits of an eSIM-enabled smartphone 
            <span className='fw-normal'>....</span></div>
            <div className='fs-6 fs-lg-5 text-white fw-semibold opacity-75'>Let's go digital! Join the community of eSIM users for maximum experience</div>
        </div>

        <button className='pop-up-button' onClick={toggleForm}>Recommend eSIM to a friend</button>
       </div>
       </Container>
        </div>


		<Modal show={showForm} onHide={toggleForm} className='modal-container'>
		<div className="modal-size">

      <Modal.Header closeButton style={{ backgroundImage:`url(${bg})` }}>
        <Modal.Title className='text-white'  >Recommend eSIM to a friend</Modal.Title>
      </Modal.Header>
      <Modal.Body >
      
        <RecommendFriend onClose={toggleForm} />
      </Modal.Body>
		</div>
    </Modal>
		</div>


     );
}
 
export default FaqComponent;