'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbarOuter">
            <div className="navbarContainer">
                <div className="logo">
                    <Image
                        src="/assets/BNI_logo.jpg"
                        alt="BNI Logo"
                        width={80}
                        height={40}
                        priority
                    />
                </div>

                <div className="navbarInner">
                    <div className="navLinks">
                        <Link href="#">The BNI Experience</Link>
                        <Link href="#">Our Global Community</Link>
                        <Link href="#">My BNI Story</Link>
                        <Link href="#">BNI Franchising</Link>
                        <div className="dropdown">About BNI <span className="arrow">▼</span></div>
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
