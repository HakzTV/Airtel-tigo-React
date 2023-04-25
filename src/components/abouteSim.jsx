import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgEsim from '../assets/airtelTigo-eSim.png';
import '../scss/aboutEsim.scss'

// Component for the About Esim section
function AboutEsim() {
    return (
      <section id='aboutEsim'>

        <div className='h-100 my-5'>
      {/* Container imported from bootstrap for the section */}
        <Container id=''>
          <Row>
            <Col md={6}>
              <h2 className='red'>Introducing</h2>
              <h2 className='blue'>AirtelTigo eSIM</h2>
              <span className='text-gray-800 fw-semibold  px-5'>

              <p>AirtelTigo eSIM Service is a SIM provision (network profile) that is installed onto any eSIM enabled device such as smartphones. </p>
                      <br />
                      <p>

                          With an eSIM in your smartphone, you can link multiple mobile networks to a single device.
                      </p>
                      <br />
                      <p>
                          You can switch network providers without swapping physical SIM cards. Dual SIM phones can use both a physical SIM and an eSIM to support the use of two or more numbers.</p>
              </span>
            </Col>
            <Col md={6}>
              <img src={bgEsim} alt="alt-text" className="img-fluid" />
            </Col>
          </Row>
          <Row className='pt-4'>
            <Col md={4}>
              <div className='d-flex mb-3 '>
            <span className="circle-with-content">1</span>
            <div className="headline2 fs-5 fs-lg-3 fw-bold b">How to get your eSIM to work on AirtelTigo</div>
              </div>
              <div>
              <p>Visit any AirtelTigo customer service shop to acquire your eSIM, or request for the eSIM online via eSIM.airteltigo.com.gh.</p>
              </div>
            </Col>

            <Col md={4}>
              <div className='d-flex mb-3'>
            <span className="circle-with-content">2</span>
            <div className="headline2 fs-5 fs-lg-3 fw-bold b">International service provider support</div>
              </div>
              <div>

              <p>With an eSIM-enabled smartphone, you can change service providers remotely, enabling seamless international use.</p>
              </div>
            </Col>
            <Col md={4}>
            <div className='d-flex mb-3 mr-5'>
              <span className="circle-with-content">3</span>
              <div className="headline2 fs-5 fs-lg-3 fw-bold b">
                SIM safety
              </div>
            </div>
              <div>

              <p>An eSIM profile can easily be deactivated and delinked from a lost or stolen device and activated on a new eSIM-enabled device</p>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      </section>
      );
}

export default AboutEsim;