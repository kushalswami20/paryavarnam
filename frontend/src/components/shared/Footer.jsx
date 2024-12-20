import React from 'react';
import "../css/Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <a href="about.html">About Us</a>
                <a href="services.html">Services</a>
                <a href="contact.html">Contact</a>
                <a href="privacy-policy.html">Privacy Policy</a>
            </div>
            <div>
                <p>©️ 2024 YourWebsiteName. All Rights Reserved.</p>
                <p>
                    Follow us: 
                    <a href="https://facebook.com">Facebook</a>
                    <a href="https://twitter.com">Twitter</a>
                    <a href="https://instagram.com">Instagram</a>
                    <a href="https://linkedin.com">LinkedIn</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;