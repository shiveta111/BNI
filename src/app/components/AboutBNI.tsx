import React from 'react';
import '../styles/AboutBNI.css';

const AboutBNI = () => {
    return (
        <section className="about-bni-wrapper">
            <div className="about-bni-container">
                <div className="about-bni-left">
                    <h2 className="about-bni-heading">
                        Join <span className="red">BNI<sup>®</sup></span>, the world’s largest<br />
                        and most successful <span className="red">referral<br />networking organization</span>
                    </h2>

                    <div className="about-bni-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/JTLWbaIKJuw"
                            title="BNI Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="about-bni-right">
                    <p className="about-bni-paragraph">
                        Discover how BNI Members around the world meet each week locally to pass millions of referrals to each other worth billions of dollars in revenue for businesses just like yours.
                    </p>

                    <div className="about-bni-matrix">
                        <div className="matrix-cell top-left">
                            <h3 className="matrix-number">340K+</h3>
                            <p>Global Members</p>
                        </div>
                        <div className="matrix-cell top-right">
                            <h3 className="matrix-number">11,300+</h3>
                            <p>Global Chapters</p>
                        </div>
                        <div className="matrix-cell bottom-left">
                            <h3 className="matrix-number">76</h3>
                            <p>Countries</p>
                        </div>
                        <div className="matrix-cell bottom-right">
                            <h3 className="matrix-number">17.2M</h3>
                            <p>Member Referrals<br /><span className="sub">Last 12 Months*</span></p>
                        </div>
                        <div className="matrix-center">
                            <h3 className="matrix-center-number">$26.6B</h3>
                            <p><strong>Revenue Generated<br />for Members</strong></p>
                            <p className="sub">Last 12 Months*</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBNI;
