import React from "react";
import logo from '../assets/logo.jpg';
import '../scss/footer.scss'

// Footer Component of the page
const FooterComponent = () => {
    return ( 
        <section className="footer">
            <div className="container">
                <div className="footer-content">
                {/* Footer logo  */}
                    <div className="logo">
                        <img
                        src={logo} 
                        alt="Airtel Tigo Logo" 
                        className="footer__logo"
                        />
						<span className="mx-5  pt-1" href="https://airteltigo.com">&copy; 2023 AirtelTigo.</span>

                    </div>
                    {/* Links  */}
                    <div className="footer-links">
                        <ul>
                            <li className="links">
                            <a href="https://www.airteltigo.com.gh/profile">About</a>
                            <a href="https://www.airteltigo.com.gh/personal/data-packs">Data Offers</a>
                            <a href="https://www.airteltigo.com.gh/personal/voice-packs">Voice Offers</a>
                            <a href="https://www.airteltigo.com.gh/personal/international">International</a>
                            <a href="https://www.airteltigo.com.gh/personal/vas">VAS</a>
                            <a href="https://www.airteltigo.com.gh/personal/customer-care">Support</a>
                            <a href="#">Get your eSIM</a>
                            </li>
                        </ul>
                    </div>
                    {/* Second footer logo to have dymanic effect */}
                    <div className="logo2">
                        <img
                        src={logo} 
                        alt="Airtel Tigo Logo" 
                        className="footer__logo"
                        />
						<span className="mx-5  pt-1" href="https://airteltigo.com">&copy; 2023 AirtelTigo.</span>

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default FooterComponent;