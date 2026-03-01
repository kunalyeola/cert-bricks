import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../../assets/css/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClick = (link) => {
        setActiveLink(link);
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        "Home",
        "Courses and Certification",
        "JobPortal",
        "Community"
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <span className="text-gradient" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                        Cert Bricks
                    </span>
                </div>

                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <button
                            key={item}
                            className={`nav-btn ${activeLink === item ? 'active' : ''}`}
                            onClick={() => handleClick(item)}
                        >
                            {item}
                        </button>
                    ))}
                    <button className="nav-btn" onClick={() => { setIsMobileMenuOpen(false); navigate('/'); }}>Home</button>
                    <button className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Courses and Certification</button>
                    <button className="nav-btn" onClick={() => { setIsMobileMenuOpen(false); window.open('https://cyber-talent-ecosystem.vercel.app/', '_blank', 'noopener,noreferrer'); }}>JobPortal</button>
                    <button className="nav-btn" onClick={() => { setIsMobileMenuOpen(false); navigate('/isdc'); }} title="Industry Skill Development Centre">ISDC</button>
                    <button className="nav-btn" onClick={() => { setIsMobileMenuOpen(false); navigate('/community-chapters'); }}>Community Chapters</button>
                    <button className="nav-btn" onClick={() => { setIsMobileMenuOpen(false); navigate('/industry-advisory-board'); }}>Industry Advisory Board</button>
                </div>

                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
