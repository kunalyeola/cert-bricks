import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../../assets/css/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY && window.scrollY > 80) { // Hiding when scrolling down (and scrolled past 80px)
                setShowNavbar(false);
            } else { // Showing when scrolling up
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', action: () => navigate('/') },
        { name: 'Courses and Certification', action: () => navigate('/courses-and-certification') },
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
        <nav
            className="navbar"
            style={{
                transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out',
                position: 'fixed'
            }}
        >
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
