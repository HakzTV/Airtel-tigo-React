import React, { useState } from 'react';  

import { FaStar } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

import MultiStepForm from './MultiStepForm';
import '../scss/pricing.scss'

const PricingContainer = () => {
    const [showForm, setShowForm] = useState(false);
    
    const toggleForm = () => {
        setShowForm(!showForm);
      };
  return (
    <section className='wrapper' id='eSimOffers'>

    <div className="pricing-container">
    <div className="container">
    <div className='text-center mt-5'>
        
        <h3 className='text-white'>eSIM Bundle Offers</h3>
        <div className="fs-5 text-white ">
        Get incredible bundle plans on your AirtelTigo eSIM. These are special one-time offers that give you huge volumes of data and call bundles to call all networks at affordable prices only on your #AirtelTigoeSIM. Pick your preferred plan below.
		
         </div>
    
    </div>
        <div className="d-flex container">
            <div className="card-body p-lg-5">
                <div className="row">
                    <div className='col-xl-4 mt-5'>
                        <div className="pricing-card w-100 h-100">
                            <h1 className='red f-s1'>Vibe Mini</h1>
                            <p className='t-bold separator f-s'>Gives you both data and call minutes to call all networks</p>
                              
                            <div className="text-center">
                                <span className="mb-2 headline blue">GHS</span>
                                <span className="fs-3x fw-bold headline blue" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">10</span>
                                <span className="fs-7 fw-semibold opacity-50"></span>
                            </div>
                            <div className="w-100 mb-10 dyni">
                                <div className="d-flex align-items-center mb-5">
                                    <span className="fw-semibold fs-6 flex-grow-1 pe-3">Data: 3GB</span>
                                    <span className="text-danger stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                                                    
                                    </span>
                                </div>
												
                            <div className="d-flex align-items-center mb-5">
                                <span className="fw-semibold fs-6 flex-grow-1 pe-3">Calls: 20mins</span>
                                <span className="text-danger stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </span>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                                <span className="fw-semibold fs-6  flex-grow-1 pe-3">Validity: 7 days</span>
                                <span className="text-danger stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </span>
                            </div>
				        </div>
                            <button className="buy-button" onClick={toggleForm}>Buy</button>
                    </div>
                </div>
                <div className='col-xl-4 mt-5'>
                        <div className="pricing-card w-100 h-100">
                            <h1 className='red f-s1'>Vibe Regular</h1>
                            <p className='t-bold separator f-s'>Gives you both data and call minutes to call all networks</p>
                              
                            <div className="text-center">
                                <span className="mb-2 headline blue">GHS</span>
                                <span className="fs-3x fw-bold headline blue" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">20</span>
                                <span className="fs-7 fw-semibold opacity-50"></span>
                            </div>
                            <div className="w-100 mb-10 dyni">
                                <div className="d-flex align-items-center mb-5">
                                    <span className="fw-semibold fs-6 flex-grow-1 pe-3">Data: 7GB</span>
                                    <span className="text-danger stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                                                    
                                    </span>
                                </div>
												
                            <div className="d-flex align-items-center mb-5">
                                <span className="fw-semibold fs-6  flex-grow-1 pe-3">Calls: 60mins</span>
                                <span className="text-danger stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </span>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                                <span className="fw-semibold fs-6  flex-grow-1 pe-3">Validity: 15 days</span>
                                <span className="text-danger stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </span>
                            </div>
				        </div>
                            <button className="buy-button" onClick={toggleForm}>Buy</button>
                    </div>
                </div>

                <div className='col-xl-4 mt-5'>
                        <div className="pricing-card w-100 h-100">
                            <h1 className='red f-s1'>Vibe Mini</h1>
                            <p className='t-bold separator f-s'>Gives you both data and call minutes to call all networks</p>
                              
                            <div className="text-center">
                                <span className="mb-2 headline blue">GHS</span>
                                <span className="fs-3x fw-bold headline blue" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">50</span>
                                <span className="fs-7 fw-semibold opacity-50"></span>
                            </div>
                            <div className="w-100 mb-10 dyni">
                                <div className="d-flex align-items-center mb-5">
                                    <span className="fw-semibold fs-6 flex-grow-1 pe-3">Data: 20GB</span>
                                    <span className="text-danger stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                                                    
                                    </span>
                                </div>
												
                            <div className="d-flex align-items-center mb-5">
                                <span className="fw-semibold fs-6 flex-grow-1 pe-3">Calls: 150mins</span>
                                <span className="text-danger stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </span>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                                <span className="fw-semibold fs-6  flex-grow-1 pe-3">Validity: 30 days</span>
                                <span className="text-danger stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </span>
                            </div>
				        </div>
                            <button className="buy-button" onClick={toggleForm}>Buy</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <Modal show={showForm} onHide={toggleForm}>
      <Modal.Header closeButton>
        <Modal.Title>Register for AirtelTigo eSIM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MultiStepForm onClose={toggleForm} />
      </Modal.Body>
    </Modal>
    </div>
    </section>
  );
};

export default PricingContainer;
