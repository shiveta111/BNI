import React from 'react';
import '../styles/CallToAction.css';

const CallToAction = () => {
    return (
        <section className="call-to-action-wrapper">
            <div className="call-to-action-box">
                <div className="call-to-action-text">
                    <p>
                        <span className="highlight-red">See why 340K+</span> entrepreneurs like you chose <strong>BNI</strong> to grow their business
                    </p>
                </div>
                <div className="call-to-action-button">
                    <button>FIND A CHAPTER</button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
