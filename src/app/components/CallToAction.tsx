import React from 'react';
import '../styles/CallToAction.css';

const CallToAction = () => {
    return (
        <section className="cta-wrapper">
            <div className="cta-box">
                <div className="cta-text">
                    <p>
                        <span className="cta-highlight">See why 340K+</span> entrepreneurs like you chose <strong>BNI</strong> to grow their business
                    </p>
                </div>
                <div className="cta-button">
                    <button>FIND A CHAPTER</button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
