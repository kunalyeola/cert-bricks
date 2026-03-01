import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../../assets/css/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', action: () => navigate('/') },
        { name: 'Courses and Certification', action: () => { } },
        { name: 'JobPortal', action: () => window.open('https://cyber-talent-ecosystem.vercel.app/', '_blank', 'noopener,noreferrer') },
        { name: 'ISDC', action: () => navigate('/isdc'), title: 'Industry Skill Development Centre' },
        { name: 'Community Chapters', action: () => navigate('/community-chapters') },
        { name: 'Industry Advisory Board', action: () => navigate('/industry-advisory-board') }
    ];

    const handleNavClick = (link) => {
        setActiveLink(link.name);
        setIsMobileMenuOpen(false);
        link.action();
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <span className="text-gradient" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                        Cert Bricks
                    </span>
                </div>

                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            className={`nav-btn ${activeLink === link.name ? 'active' : ''}`}
                            onClick={() => handleNavClick(link)}
                            title={link.title}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
