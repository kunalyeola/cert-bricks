export const chaptersData = {
  pune: {
    city: "Pune",
    image: "/pune.png",
    tagline: "Join a Local Chapter. Grow Within Your Domain.",

    sections: [
      {
        id: "about",
        title: "1. About Pune Chapter",
        content: `The Pune Tech Chapter brings together students, professionals, founders, and technology enthusiasts across cybersecurity, AI, DevOps, and software engineering.
Our goal is to foster collaboration, industry alignment, and real-world skill development through structured domain communities and local meetups.

The Pune Tech Chapter serves as a local hub for students, professionals, and technology enthusiasts committed to building industry-aligned skills in emerging domains. Through structured domain communities in Cybersecurity, AI & ML, Cloud & DevOps, and Software Development, the chapter fosters collaboration, knowledge sharing, and real-world problem solving.

By organizing regular meetups, technical sessions, workshops, and mentorship interactions, the Pune Chapter aims to bridge the gap between academic learning and industry expectations — creating a strong ecosystem of execution-ready talent within the city.`
      },

      {
        id: "leads",
        title: "2. Chapter Leads",
        content:
          "Meet the seasoned leaders who guide the Pune chapter, bringing years of industry experience to help mentor and grow the community.",
        leads: [
          {
            name: "John Doe",
            role: "Cybersecurity Lead",
            image: "https://i.pravatar.cc/150?img=12"
          },
          {
            name: "Jane Smith",
            role: "AI Lead",
            image: "https://i.pravatar.cc/150?img=32"
          }
        ]
        // leads: [
        //   { name: "John Doe", role: "Cybersecurity Lead" },
        //   { name: "Jane Smith", role: "AI Lead" }
        // ]
      },

      {
        id: "meetups",
        title: "3. Upcoming Meetups",
        content:
          "Stay tuned for our upcoming events! We host monthly meetups consisting of hands-on workshops, expert panels, and networking sessions."
      },

      {
        id: "communities",
        title: "4. Industry Communities",
        content:
          "Dive deep into specific domains like offensive security, defense, cloud security, and compliance with our specialized sub-groups.",
        tags: ["Cybersecurity", "AI & ML", "Cloud & DevOps", "Software Dev"]
      },

      {
        id: "join",
        title: "Join the Community",
        content:
          "Ready to take the next step? Become an active member of the Pune Chapter today and start contributing.",
        cta: "Register Now"
      }
    ]
  }
};