import React from 'react';
import "../css/Footer.css";
const Footer = () => {
    return (
        <footer className="foot">
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Documentation</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Connect With Us</h3>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook">📱</a>
                            <a href="#" aria-label="Twitter">💬</a>
                            <a href="#" aria-label="LinkedIn">👥</a>
                            <a href="#" aria-label="Instagram">📷</a>
                        </div>
                        <div class="contact-info">
                            <p>Email: contact@example.com</p>
                            <p>Phone: (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                <div class="bottom-bar">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;