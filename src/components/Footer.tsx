import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Restaurant Name. All rights reserved.</p>
                <ul>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;