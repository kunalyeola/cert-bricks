export const courses = [
    {
        title: 'Certified Ethical Hacker (CEH)',
        description: 'Master in all courses',
        level: 'Beginner',
        duration: '12 Weeks',
        category: 'Foundational'
    },
    {
        title: 'Certified Cybersecurity Professional',
        description: 'Master the fundamentals of cybersecurity, network defense, and risk management.',
        level: 'Beginner',
        duration: '12 Weeks',
        category: 'Foundational'
    },
    {
        title: 'Cloud Security Architect',
        description: 'Learn to design and implement secure cloud infrastructure on AWS, Azure, and GCP.',
        level: 'Advanced',
        duration: '16 Weeks',
        category: 'Cloud'
    },
    {
        title: 'Ethical Hacking Practitioner',
        description: 'Hands-on practical training in penetration testing and offensive security.',
        level: 'Intermediate',
        duration: '10 Weeks',
        category: 'Offensive Security'
    },
    {
        title: 'Incident Response Associate',
        description: 'Develop skills to detect, analyze, and respond to cyber threats and breaches.',
        level: 'Intermediate',
        duration: '8 Weeks',
        category: 'Defensive Security'
    },
    {
        title: 'Compliance & Risk Management',
        description: 'Understand regulatory frameworks, IT audits, and information security policies.',
        level: 'Beginner',
        duration: '6 Weeks',
        category: 'Management'
    },
    {
        title: 'Network Defense Specialist',
        description: 'Advanced techniques for securing enterprise networks against sophisticated attacks.',
        level: 'Advanced',
        duration: '14 Weeks',
        category: 'Networking'
    }
];

// Extracting unique categories along with a generic placeholder icon/description for the category cards
export const getCategories = () => {
    const uniqueCategories = [...new Set(courses.map(course => course.category))];

    return uniqueCategories.map(category => ({
        name: category,
        courseCount: courses.filter(c => c.category === category).length,
        description: `Explore our training paths for ${category} cybersecurity professionals.`,
    }));
};
