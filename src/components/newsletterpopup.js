import React, { useState, useEffect } from 'react';
import './newsletterpopup.css';

const NewsletterPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show the popup after 2 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleContentClick = (e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up to the parent
    };

    return (
        showPopup && (
            <div className="popup-container" onClick={closePopup}>
                <div className="popup-content" onClick={handleContentClick}>
                    <span className="close-btn" onClick={closePopup}>&times;</span>
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Stay updated with our latest news and offers!</p>
                    <form id="newsletter-form">
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        )
    );
};

export default NewsletterPopup;
