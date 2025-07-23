'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbarOuter">
            <div className="navbarContainer">

                <div className="logo">
                    <Image src="/assets/BNI_logo.jpg" alt="BNI Logo" width={80} height={40} priority />
                </div>


                <div className="iconsRight">
                    <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                    <div className="hamburger" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </div>
                </div>


                <nav className={`navbarInner ${menuOpen ? 'open' : ''}`}>
                    <div className="navLinks">
                        <Link href="#">The BNI Experience</Link>
                        <Link href="#">Our Global Community</Link>
                        <Link href="#">My BNI Story</Link>
                        <Link href="#">BNI Franchising</Link>
                        <span className="dropdown">About BNI <span className="arrow">▼</span></span>
                    </div>

                    <div className="rightSection">
                        <div className="email">
                            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                            support@bni.com
                        </div>
                        <button className="inviteButton">GET INVITED</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
