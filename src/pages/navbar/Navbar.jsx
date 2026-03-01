import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../../assets/css/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home"); // default active

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
                </div>

                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="container navbar-container">
//                 <div className="navbar-logo">
//                     <span className="text-gradient" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Cert Bricks</span>
//                 </div>
//                 <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
//                     <button className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Home</button>
//                     <button className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Courses and Certification</button>
//                     <button className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>JobPortal</button>
//                     <button className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Community</button>
//                 </div>

//                 <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
//                     {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
