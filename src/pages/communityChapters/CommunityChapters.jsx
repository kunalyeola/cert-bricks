// import React, { useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../../assets/css/CommunityChapters.css';

// const CommunityChapters = () => {
//     const navigate = useNavigate();
//     const heroRef = useRef(null);
//     const bgRef = useRef(null);
//     const glowRef = useRef(null);
//     const cardRef = useRef(null);
//     const [currentBg, setCurrentBg] = useState(0);

//     const chapters = [
//         { city: 'Pune', country: 'India', image: '/pune.png' },
//         { city: 'Bangalore', country: 'India', image: '/banglore.png' },
//         { city: 'Hyderabad', country: 'India', image: '/hyedarbad.png' },
//         { city: 'Chennai', country: 'India', image: '/chennai.png' },
//         { city: 'Mumbai', country: 'India', image: '/mumbai.png' },
//         { city: 'Nashik', country: 'India', image: '/Nashik.png' },
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentBg((prev) => (prev + 1) % chapters.length);
//         }, 4000);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             const hero = heroRef.current;
//             if (!hero) return;

//             const rect = hero.getBoundingClientRect();

//             const x = (e.clientX - rect.left) / rect.width;   // 0 → 1
//             const y = (e.clientY - rect.top) / rect.height;   // 0 → 1

//             const moveX = (x - 0.5) * 30; // intensity
//             const moveY = (y - 0.5) * 30;

//             // Background (slow movement)
//             if (bgRef.current) {
//                 bgRef.current.style.transform = `scale(1.1) translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;
//             }

//             // Glow layer (medium movement)
//             if (glowRef.current) {
//                 glowRef.current.style.transform = `translate(${moveX * 0.6}px, ${moveY * 0.6}px)`;
//             }

//             // Glass card (tilt effect 🔥)
//             if (cardRef.current) {
//                 cardRef.current.style.transform = `
//                 rotateX(${(-moveY) * 0.2}deg)
//                 rotateY(${moveX * 0.2}deg)
//                 translateZ(10px)
//             `;
//             }
//         };

//         const reset = () => {
//             if (bgRef.current) {
//                 bgRef.current.style.transform = `scale(1.05)`;
//             }
//             if (glowRef.current) {
//                 glowRef.current.style.transform = `translate(0,0)`;
//             }
//             if (cardRef.current) {
//                 cardRef.current.style.transform = `rotateX(0) rotateY(0)`;
//             }
//         };

//         const hero = heroRef.current;

//         if (hero) {
//             hero.addEventListener('mousemove', handleMouseMove);
//             hero.addEventListener('mouseleave', reset);
//         }

//         return () => {
//             if (hero) {
//                 hero.removeEventListener('mousemove', handleMouseMove);
//                 hero.removeEventListener('mouseleave', reset);
//             }
//         };
//     }, []);

//     return (
//         <div>
//             {/* HERO */}
//             <section className="community-hero" ref={heroRef}>

//                 {/* Background */}
//                 <div
//                     ref={bgRef}
//                     className="community-hero-bg"
//                     style={{ backgroundImage: `url(${chapters[currentBg].image})` }}
//                 ></div>

//                 {/* Overlay */}
//                 <div className="community-hero-overlay"></div>

//                 {/* Glow */}
//                 <div ref={glowRef} className="hero-glow"></div>

//                 {/* Content */}
//                 <div ref={cardRef} className="hero-glass-card">

//                     <p className="hero-badge">
//                         🌍 Now exploring: <span>{chapters[currentBg].city}</span>
//                     </p>

//                     <h1 className="hero-title">
//                         Explore Our <span className="text-gradient">City Chapters</span>
//                     </h1>

//                     <p className="hero-subtitle">
//                         Join a cert Bricks chapter near you and connect with local tech enthusiasts.
//                     </p>

//                 </div>
//             </section>
//             {/* <section className="community-hero">
//         <div
//           className="community-hero-bg"
//           style={{ backgroundImage: `url(${chapters[currentBg].image})` }}
//         ></div>

//         <div className="community-hero-overlay"></div>

//         <div className="hero-glass-card">
//           <h1 className="hero-title">
//             Explore Our <span className="text-gradient">City Chapters</span>
//           </h1>

//           <p className="hero-subtitle">
//             Join a cert Bricks chapter near you and connect with local tech enthusiasts.
//           </p>
//         </div>
//       </section> */}

//             {/* GRID */}
//             <section className="section" style={{ background: 'var(--bg-secondary)', paddingBottom: '6rem' }}>
//                 <div className="container">
//                     <div className="chapter-grid">
//                         {chapters.map((chapter, idx) => (
//                             <div key={idx} className="chapter-card">
//                                 <img src={chapter.image} alt={chapter.city} />

//                                 <div className="chapter-content">
//                                     <h3>
//                                         {chapter.city}, {chapter.country}
//                                     </h3>

//                                     <button
//                                         className={`chapter-btn ${chapter.city === 'Pune' ? 'active' : 'disabled'
//                                             }`}
//                                         disabled={chapter.city !== 'Pune'}
//                                         onClick={() => {
//                                             if (chapter.city === 'Pune') {
//                                                 navigate('/pune-chapter');
//                                             }
//                                         }}
//                                     >
//                                         {chapter.city === 'Pune' ? 'Join Chapter' : 'Coming Soon'}
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default CommunityChapters;



import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/CommunityChapters.css';

const CommunityChapters = () => {
    const navigate = useNavigate();

    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const glowRef = useRef(null);
    const cardRef = useRef(null);

    const rafRef = useRef(null);

    const [currentBg, setCurrentBg] = useState(0);

    const chapters = [
        { city: 'Pune', country: 'India', image: '/pune.png' },
        { city: 'Bangalore', country: 'India', image: '/banglore.png' },
        { city: 'Hyderabad', country: 'India', image: '/hyedarbad.png' },
        { city: 'Chennai', country: 'India', image: '/chennai.png' },
        { city: 'Mumbai', country: 'India', image: '/mumbai1.png' },
        { city: 'Nashik', country: 'India', image: '/Nashik.png' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % chapters.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);

            rafRef.current = requestAnimationFrame(() => {
                const hero = heroRef.current;
                if (!hero) return;

                const rect = hero.getBoundingClientRect();

                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;

                const moveX = (x - 0.5) * 20;
                const moveY = (y - 0.5) * 20;

                // Background
                bgRef.current.style.transform =
                    `scale(1.1) translate(${moveX * 0.3}px, ${moveY * 0.3}px)`;

                // Glow
                glowRef.current.style.transform =
                    `translate(${moveX * 0.6}px, ${moveY * 0.6}px)`;

                // Card tilt
                cardRef.current.style.transform =
                    `rotateX(${(-moveY) * 0.3}deg) rotateY(${moveX * 0.3}deg)`;
            });
        };

        const reset = () => {
            bgRef.current.style.transform = `scale(1.1)`;
            glowRef.current.style.transform = `translate(0,0)`;
            cardRef.current.style.transform = `rotateX(0) rotateY(0)`;
        };

        const hero = heroRef.current;

        hero.addEventListener('mousemove', handleMouseMove);
        hero.addEventListener('mouseleave', reset);

        return () => {
            hero.removeEventListener('mousemove', handleMouseMove);
            hero.removeEventListener('mouseleave', reset);
        };
    }, []);
    const isDarkImage = currentBg % 2 === 0;

    return (
        <div>
            <section className="community-hero" ref={heroRef}>

                <div
                    ref={bgRef}
                    className="community-hero-bg"
                    style={{ backgroundImage: `url(${chapters[currentBg].image})` }}
                />

                <div className="community-hero-overlay" />

                <div ref={glowRef} className="hero-glow" />

                <div className={`hero-glass-card ${isDarkImage ? 'dark' : 'light'}`}>

                    <h1 className="hero-title">
                        Explore Our City Chapters
                    </h1>

                    <p className="hero-subtitle">
                        Join a cert Bricks chapter near you and connect with local tech enthusiasts.
                    </p>

                </div>
            </section>

            {/* GRID remains same */}
            <section className="section" style={{ background: 'var(--bg-secondary)', paddingBottom: '6rem' }}>
                <div className="container">
                    <div className="chapter-grid">
                        {chapters.map((chapter, idx) => (
                            <div key={idx} className="chapter-card">

                                <div className="chapter-image-wrapper">
                                    <img src={chapter.image} alt={chapter.city} />

                                    {/* Overlay gradient */}
                                    <div className="chapter-image-overlay"></div>

                                    {/* City badge */}
                                    <div className="chapter-badge">
                                        📍 {chapter.city}
                                    </div>
                                </div>

                                <div className="chapter-content">
                                    <h3>
                                        {chapter.city}, {chapter.country}
                                    </h3>

                                    <p className="chapter-desc">
                                        Connect with local developers, attend events, and grow your skills.
                                    </p>

                                    <button
                                        className={`chapter-btn ${chapter.city === 'Pune' ? 'active' : 'disabled'
                                            }`}
                                        disabled={chapter.city !== 'Pune'}
                                        onClick={() => {
                                            if (chapter.city === 'Pune') {
                                                navigate(`/chapter/${chapter.city.toLowerCase()}`)
                                                // navigate('/pune-chapter');
                                            }
                                        }}
                                    >
                                        {chapter.city === 'Pune' ? 'Join Chapter →' : 'Coming Soon'}
                                    </button>
                                </div>

                            </div>
                            
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommunityChapters;