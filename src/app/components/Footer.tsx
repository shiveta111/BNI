import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-main">
                <div className="footer-columns">
                    <div>
                        <h4>The BNI Experience</h4>
                        <p>Our Global Community</p>
                        <p>My BNI Story</p>
                        <p>BNI Franchising</p>
                    </div>
                    <div>
                        <h4>About Us</h4>
                        <p>Leadership</p>
                        <p>National Directors</p>
                        <p>Our Founder</p>
                        <p>BNI® Foundation</p>
                    </div>
                    <div>
                        <h4>The Latest</h4>
                        <p>Blog & News</p>
                        <p>Networking Tips</p>
                        <p>Global Events</p>
                        <p>Careers</p>
                    </div>
                    <div>
                        <h4>Find a Chapter</h4>
                        <p>Start a Chapter</p>
                        <p>Exclusive Member Benefits</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <h4>Member Services</h4>
                        <p>BNI Connect</p>
                        <p>BNI Business Builder</p>
                        <p>BNI Brandshare</p>
                        <p>BNI US Store</p>
                        <p>BNI Global Store</p>
                    </div>
                    <div>
                        <h4>📞 In U.S.</h4>
                        <p>(800)-825-8286</p>
                        <h4>📧 Outside U.S.</h4>
                        <p>support@bni.com</p>
                        <h4>📍 Address</h4>
                        <p>3430 Toringdon Way,<br />Suite 300 Charlotte, NC 28277</p>
                    </div>
                </div>

                <div className="footer-subscribe">
                    <div className="subscribe-text">
                        <h3>BNI SuccessNet<sup>™</sup></h3>
                        <p>Sign up for exclusive networking tips and more.</p>
                    </div>
                    <div className="subscribe-input">
                        <input type="email" placeholder="Email" />
                        <button>&rarr;</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-links">
                    <span>Cookie Policy</span>
                    <span>Privacy Policy</span>
                    <span>Terms and Conditions</span>
                    <span>© 2025 BNI Global, LLC</span>
                </div>
                <div className="social-icons">
                    <span>Follow BNI</span>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
