import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <span className="text-gradient" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>cert Bricks</span>
                </div>
                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <button className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Home</button>
                    <button className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Courses and Certification</button>
                    <button className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>JobPortal</button>
                    <button className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Community</button>
                </div>

                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
