import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Fizyokiraz. All rights reserved.</p>
                <p>Contact us: info@fizyokiraz.com</p>
            </div>
        </footer>
    );
};

export default Footer;