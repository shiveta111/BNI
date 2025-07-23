import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-content">
                    <div className="footer-columns">
                        <div className="footer-col">
                            <h4>The BNI Experience</h4>
                            <ul>
                                <li><a href="#">Our Global Community</a></li>
                                <li><a href="#">My BNI Story</a></li>
                                <li><a href="#">BNI Franchising</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>About Us</h4>
                            <ul>
                                <li><a href="#">Leadership</a></li>
                                <li><a href="#">National Directors</a></li>
                                <li><a href="#">Our Founder</a></li>
                                <li><a href="#">BNI<sup>®</sup> Foundation</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>The Latest</h4>
                            <ul>
                                <li><a href="#">Blog & News</a></li>
                                <li><a href="#">Networking Tips</a></li>
                                <li><a href="#">Global Events</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Find a Chapter</h4>
                            <ul>
                                <li><a href="#">Start a Chapter</a></li>
                                <li><a href="#">Exclusive Member Benefits</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Member Services</h4>
                            <ul>
                                <li><a href="#">BNI Connect</a></li>
                                <li><a href="#">BNI Business Builder</a></li>
                                <li><a href="#">BNI Brandshare</a></li>
                                <li><a href="#">BNI US Store</a></li>
                                <li><a href="#">BNI Global Store</a></li>
                            </ul>
                        </div>
                        <div className="footer-col contact-info">
                            <ul>
                                <li>
                                    <FaPhoneAlt className="contact-icon" />
                                    <span>In U.S. <strong>(800)-825-8286</strong></span>
                                </li>
                                <li>
                                    <FaEnvelope className="contact-icon" />
                                    <span>Outside U.S. <strong>support@bni.com</strong></span>
                                </li>
                                <li>
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>3430 Toringdon Way,<br />Suite 300 Charlotte, NC 28277</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-middle">
                        <div className="footer-subscribe">
                            <div className="subscribe-info">
                                <h4>BNI SuccessNet<sup>™</sup></h4>
                                <p>Sign up for exclusive networking tips and more.</p>
                            </div>
                            <div className="subscribe-form">
                                <input type="email" placeholder="Email" />
                                <button type="submit">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="footer-social">
                            <p><strong>Follow BNI</strong></p>
                            <div className="social-icons">
                                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                                <a href="#" aria-label="YouTube"><FaYoutube /></a>
                                <a href="#" aria-label="X (Twitter)"><FaXTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="footer-links">
                        <a href="#">Cookie Policy</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Conditions</a>
                    </div>
                    <div className="footer-copy">
                        © 2025 BNI Global, LLC
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;