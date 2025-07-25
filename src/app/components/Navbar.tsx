'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle('menu-open', !menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, []);

    return (
        <div className="navbarOuter">
            <div className="navbarContainer">

                <div className="logo">
                    <Image src="/assets/BNI_logo.jpg" alt="BNI Logo" width={80} height={40} priority />
                </div>


                <div className="iconsRight">
                    <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                    <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>


                <div className={`navbarInner ${menuOpen ? 'open' : ''}`}>
                    {menuOpen && (
                        <button className="closeButton" onClick={closeMenu}>
                            ×
                        </button>
                    )}

                    <div className="navLinks">
                        <Link href="#" onClick={closeMenu}>The BNI Experience</Link>
                        <Link href="#" onClick={closeMenu}>Our Global Community</Link>
                        <Link href="#" onClick={closeMenu}>My BNI Story</Link>
                        <Link href="#" onClick={closeMenu}>BNI Franchising</Link>
                        <div className="dropdown">
                            About BNI <span className="arrow">▼</span>
                        </div>
                    </div>

                    <div className="rightSection">
                        <div className="email">
                            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                            support@bni.com
                        </div>
                        <button className="inviteButton">GET INVITED</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
