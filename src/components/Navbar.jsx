import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <span className="text-gradient" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>cert Bricks</span>
                </div>
                <div className="navbar-links">
                    <button className="nav-btn">Home</button>
                    <button className="nav-btn">Courses and Certification</button>
                    <button className="nav-btn">Jobseeker Portal</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
