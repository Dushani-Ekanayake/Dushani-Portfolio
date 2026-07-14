// ============================================================
// PORTFOLIO DATA FILE — EDIT EVERYTHING HERE
// ============================================================
// This is your single source of truth.
// Update names, links, images, and descriptions in this file.
// ============================================================
export const resumeUrl = "CV/Dushani_Ekanayake_Resume.pdf"; // 
export const personalInfo = {
  name: "DUSHANI EKANAYAKE",
  nameShort: "DUSHANI",
  title: "Computer Science Undergraduate | Developer | Technical Content Writer | Open Source Learner",
  bio: "I'm a passionate undergraduate developer who loves building clean, purposeful digital experiences. I thrive at the intersection of creativity and technology.",
  email: "kaviiekanayake2@gmail.com",          // ✏️ updated
  location: "Kandy, Sri Lanka",
  github: "https://github.com/Dushani-Ekanayake",                          // ✏️ updated
  linkedin: "https://www.linkedin.com/in/dushani-ekanayake/",              // ✏️ updated
  youtube: "https://youtube.com/@2codemint?si=p0fghMXWZts-G392",           // ✏️ new
  medium: "https://dushaniekanayake.medium.com/",                          // ✏️ new
  hashnode: "https://hashnode.com/@dushaniekanayake",                      // ✏️ new
};
export const profileImage = "Images/Portfolio.png";
export const heroImage = "Images/Hero.png";  
// ============================================================
// STATS (About Section)
// ✏️ EDIT: Update numbers and labels
// ============================================================
export const stats = [
  { number: "8+", label: "Projects Completed" },
  { number: "10+",  label: "Certifications" },
  { number: "4+",  label: "Volunteer Events" },
  { number: "10+", label: "Technologies Learned" },
];

// ============================================================
// EDUCATION
// ✏️ EDIT: Add your real education entries
// ============================================================
export const education = [
  {
    id: 1,
    type: "University",
    degree: "BSc (Hons) in Computer Science",  // ✏️ EDIT
    institution: "NSBM Green University",              // ✏️ EDIT
    period: "2023 – Present",                         // ✏️ EDIT
    gpa: "3.8 / 4.0(current)",                                // ✏️ EDIT
    coursework: ["Data Structures", "Web Development", "Database Systems", "OOP Porgramming", "Alogirthms", "Java Programming", "Software Engineering", "Human Computer Interaction"],
  
  },
   {
    id: 2,
    type: "diploma",
    degree: "Diploma in Human Resource Management",  // ✏️ EDIT
    institution: "IMBS Green Campus",                      // ✏️ EDIT
    period: "2024 – 2025", 
    gpa: "3.5 / 4.0",
    coursework: ["Human Resource Management", "Business Law"],
  },
  
  {
    id: 3,
    type: "School",
    degree: "G.C.E. Advanced Level — Physical Science",  // ✏️ EDIT
    institution: "St'. Anthony's Girls' College",                      // ✏️ EDIT
    period: "2019 – 2022", 
    coursework: ["Physics", "Combined Maths", "Chemistry"],
  },
];

// ============================================================
// CERTIFICATIONS
// ✏️ EDIT: Replace with your real certifications
// Place certificate images in: src/assets/certificates/
// ============================================================
export const certifications = [
  {
    id: 1,
    title: "API Beginner",          // ✏️ EDIT
    issuer: "Postman",             // ✏️ EDIT
    date: "2026",                         // ✏️ EDIT
    credentialId: "69b3d30adf69e495b6a1fe92",                  // ✏️ EDIT (optional)
    // ✏️ EDIT image: place file in src/assets/certificates/ and update path
    image: "Images/Postman.webp", // e.g. "/src/assets/certificates/cert1.jpg"
    // ✏️ EDIT link: URL to verify certificate online
    link: "https://badges.parchment.com/public/assertions/rPMivVpgQTCpQQP4zD8YKA",   // e.g. "https://coursera.org/verify/XXXXX"
    skills: ["API Testing", "Postman"],
  },
  {
    id: 2,
    title: "SQL - Basic",
    issuer: "HackerRank",
    date: "2026",
    credentialId: "",
    image: "Images/Hackerrank.webp",
    link: "https://www.hackerrank.com/certificates/7bfb475d71a5",
    skills: ["Queries", "Aggregate Functions","Relationships"],
  },
  {
    id: 3,
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "2026",
    image: "Images/Anthro.webp",
    link: "https://verify.skilljar.com/c/cgs2w72282rx",
    skills: ["Prompt Engineering"],
  },
   {
    id: 4,
    title: "Introduction to Github",
    issuer: "Github",
    date: "2026",
    image: "Images/Github.webp",
    link: "https://github.com/Dushani-Ekanayake/skills-introduction-to-github",
    skills: ["Version Control"],
  },
  {
    id: 5,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "Images/Cisco.webp",
    link: "https://www.credly.com/badges/50cc6c12-8498-4485-9bf0-b894659cf099/linked_in_profile",
    skills: ["Cybersecurity", "Network Security", "Threats and Vulnerabilities"],
  },
  {
    id: 6,
    title: "Introduction to Git",
    issuer: "Microsoft Learn",
    date: "2025",
    image: "Images/Micro.webp",
    link: "https://learn.microsoft.com/en-us/users/dushaniekanayake-4923/achievements/462b7dtk?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    skills: ["git bascis"],
  },
];

// ============================================================
// VOLUNTEER WORK
// ✏️ EDIT: Replace with your real volunteer entries
// Place event images in: src/assets/volunteer/
// Place certificate PDFs/images in: src/assets/certificates/
// ============================================================
export const volunteerWork = [
  {
    id: 1,
    title: "HeadBoard Member 24/25",               // ✏️ EDIT
    organization: "Association of Computer and Data Science",       // ✏️ EDIT
    // ✏️ EDIT image: place your event photo in src/assets/volunteer/
    image: "Images/Acds.jpg", // e.g. "/src/assets/volunteer/event1.jpg"
    // ✏️ EDIT certificate: URL or local path to your certificate
    certificate: "Images/Badge.jpg", // e.g. "/src/assets/certificates/vol1.pdf"  or an external URL
    description: "Leading event planning and coordination . Managing teams, organizing initiatives, and fostering collaboration among students and industry professionals to strengthen the data science community.",
    date: "2024-2025",                      // ✏️ EDIT
    role: "Co-cheif Organizer",                       // ✏️ EDIT
  },
  {
    id: 2,
    title: "Nexora 1.0 - Inter University Datathon",               // ✏️ EDIT
    organization: "Association of Computer and Data Science",       // ✏️ EDIT
    image: "Images/Vice.jpg",
    certificate: "Images/Nexoravice.jpg",
    description: "Served as the Vice Chair of the Inter-University Datathon, supporting event planning, team coordination, and decision-making. Assisted in ensuring the successful execution of the event through effective leadership and collaboration.",
    date: "JULY 2025",
    role: "vice chairperson",
  },
  {
    id: 3,
    title: "Figmate - Figma Workshop",
    organization: "Association of Computer and Data Science",
    image: "Images/Figmate.jpg",
    certificate: "Images/Figma.jpg",
    description: "Successfully led the publicity for the Figma Workshop, creating a buzz around UI/UX design and empowering students to dive into the world of creative design.",
    date: "MARCH 2025",
    role: "PUBLICITY TEAM LEAD",
  },
   {
    id: 4,
    title: "DataDive -  Two day POWERBI Workshop",
    organization: "Association of Computer and Data Science",
    image: "Images/Powerbi.jpg",
    certificate: "Images/Datadive.jpg",
    description: "Led the publicity team to successfully promote DataDive organized by Association Of Computer Science and Data science  attracting a large audience to the event. Managed marketing strategies, social media campaigns, and outreach efforts to maximize participation and engagement.",
    date: "JANUARY 2025",
    role: "PUBLICITY TEAM LEAD",
  },
    {
    id: 5,
    title: "Nexora 1.0 - Inter University Datathon",               // ✏️ EDIT
    organization: "Association of Computer and Data Science",       // ✏️ EDIT
    image: "Images/Nexora.jpg",
    certificate: "Images/Nexorapro.jpg",
    description: "Led the Program Team by organizing the event schedule, coordinating program activities, and managing task execution. Worked closely with team members to deliver a smooth and well-structured event experience",
    date: "JULY 2025",
    role: "Program Team Lead",
  },
];

// ============================================================
// PROJECTS
// ✏️ EDIT: Replace with your real projects
// Place project screenshots in: src/assets/projects/
// ============================================================
export const projects = [
  {
    id: 1,
    title: "CHATZ",             // ✏️ EDIT
    description: "Chatz is a full-stack real-time chat application featuring secure authentication, instant messaging, online user status, profile management, and image sharing, built with React, Node.js, Express, MongoDB, and Socket.IO.",
    // ✏️ EDIT image: place screenshot in src/assets/projects/
    image: "Images/Chatz.png", // e.g. "/src/assets/projects/project1.png"
    tech: ["React", "Node.js", "MongoDB","Express","Socket.IO"],  // ✏️ EDIT
    // ✏️ EDIT: your GitHub repo link
    github: "https://github.com/Dushani-Ekanayake/Chatz-Real-Time-Chat-App",          // e.g. "https://github.com/ishini/project1"
    // ✏️ EDIT: your live deployment link (Netlify, Vercel, etc.)
    live: "https://chatz-real-time-chat-app-iuse.vercel.app/",                              // e.g. "https://myproject.netlify.app"
    featured: true,
  },
  {
    id: 2,
    title: "BOOKSWAP",
    description: "An affordable student textbook marketplace that enables university students to buy, sell, and exchange textbooks at 50–70% below retail prices, built with React, Tailwind CSS, Framer Motion, and Web3 Forms.",
    image: "Images/Bookswap.png",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Web3 Forms"],
    github: "https://github.com/Dushani-Ekanayake/BookSwap",
    live: "https://book-swap-ruddy.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "THE COFFEE SHOP",
    description: "Responsive Coffee Shop landing page built with HTML, CSS, and JavaScript.",
    image: "Images/Coffee.png",
    tech: ["HTML", "CSS" , "JavaScript"],
    github: "https://github.com/Dushani-Ekanayake/Coffee-shop",
    live: "https://coffee-shop-lilac-phi.vercel.app/",
    featured: false,
  },
    {
    id: 4,
    title: "FARMER SUPPORT & CROP COLLECTION SYSETEM",
    description: "A cross-platform crop management application with crop tracking, order management, buyer communication, and administrative tools for managing users, products, and orders.",
    image: "Images/Farmer.png",
    tech: [
  "React Native",
  "Expo",
  "React.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "Sequelize",
  "Axios"
],
    github: "https://github.com/Amenda-Welgama/Farmer-Support-and-Crop-Collection-System-",
    live: "#",
    featured: false,
  },
   {
    id: 5,
    title: "FARMER SUPPORT CHATBOT",
    description: "Agri-Gemini is a web-based AI assistant designed to help farmers and agriculture students get quick, reliable, and practical advice related to crop health, farm management, sustainable agriculture, and current market trends.",
    image: "Images/Chatbot.png",
    tech: ["HTML", "CSS" , "JavaScript","Gemini API"],
    github: "https://github.com/Dushani-Ekanayake/farmer-crop-chatbot",
    live: "https://farmer-crop-chatbot.vercel.app/",
    featured: false,
  },
];

export const skills = {
  Frontend: [
    { name: 'HTML', icon: 'Icons/Html.svg' },
    { name: 'CSS', icon: 'Icons/Css.svg' },
    { name: 'JavaScript', icon: 'Icons/Javascript.svg' },
    { name: 'React', icon: 'Icons/React.svg' },
    { name: 'Tailwind', icon: 'Icons/Tailwind.svg' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'Icons/Node.svg' },
    { name: 'Express', icon: 'Icons/Express.svg' },
  ],
  Database: [
    { name: 'MySQL', icon: 'Icons/Mysql.svg' },
    { name: 'MongoDB', icon: 'Icons/Mongodb.svg' },
  ],
  Tools: [
    { name: 'Git', icon: 'Icons/Git.svg' },
    { name: 'GitHub', icon: 'Icons/Github.svg' },
    { name: 'VS Code', icon: 'Icons/Vscode.svg' },
     { name: 'Postman', icon: 'Icons/Postman.svg' },
  ],
};

// ============================================================
// TECHNICAL WRITING (Medium Articles)
// ✏️ EDIT: Replace with your real articles
// Place cover images in: src/assets/articles/
// Set featured: true for the 3 articles you want shown on the homepage
// ============================================================
// ============================================================
export const mediumProfile = "https://medium.com/@dushaniekanayake";       // ✏️ "View More" button target
export const hashnodeProfile = "https://hashnode.com/@dushaniekanayake";   // ✏️ used only if you link to it elsewhere

export const technicalWriting = [
  {
    id: 1,
    title: "Understanding ES6 Modules in Node.js (import/export Explained Simply)",                 // ✏️ EDIT
    description: "why modern apps use ES6 modules, how to configure them, and look at a production-grade directory structure built entirely on native ESM.",
    image: "Images/Hashnode.png",    // e.g. "/src/assets/articles/article1.png"
    date: "JUNE 2026",                          // ✏️ EDIT
    readTime: "7 min read",                      // ✏️ EDIT
    tags: ["Express", "JavaScript"],               // ✏️ EDIT
    platform: "Hashnode",                        // ✏️ EDIT: "Hashnode" | "Medium"
    link: "https://dushanidev.hashnode.dev/understanding-es6-modules-in-node-js-import-export-explained-simply?utm_source=hashnode&utm_medium=feed", // ✏️ EDIT: actual article URL
    featured: true,
  },
  {
    id: 2,
    title: "Anatomy of a Request: Methods, Status Codes, and Secure Handshakes",
    description: "technical deep dive into how HTTP powers communication between clients and servers.",
    image: "Images/Hashnode.png",
    date: "JANUARY 2026",
    readTime: "11 min read",
    tags: ["HTTP/HTTPS", "TCP", "Web Architecture", "TLC", "REST API"],
    platform: "Hashnode",
    link: "https://dushanidev.hashnode.dev/anatomy-of-a-request-methods-status-codes-and-secure-handshakes", // ✏️ EDIT
    featured: true,
  },
  {
    id: 3,
    title: "Demystifying Web Architecture",
    description: "Beyond the Code: The Architecture Every Modern Developer Should Understand.Why Understanding the “Big Picture” Made Me a Better Engineer.",
    image: "Images/Medium.png",
    date: "MARCH 2026",
    readTime: "4 min read",
    tags: ["web architecture", "API","TCP/IP", "HTTP/HTTPS"],
    platform: "Medium",
    link: "https://dushaniekanayake.medium.com/demystifying-web-architecture-why-understanding-the-big-picture-made-me-a-better-engineer-4657b95bbc5f?sharedUserId=dushaniekanayake", // ✏️ EDIT
    featured: true,
  },
];
