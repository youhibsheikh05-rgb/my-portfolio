import hirehubImg from "../assets/hirehub.png";

export const mernProjects = [
  {
    id: "01",
    slug: "hirehub",
    title: "HireHub — Job & Publishing Platform",
    description: "Full-stack MERN platform to find jobs and publish listings. User auth, job posting, search, and applications.",
    longDescription: "HireHub is a LinkedIn-inspired MERN application where users can browse jobs, publish job listings, and apply. Built with React, Node.js, Express, MongoDB, and JWT authentication.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Vercel"],
    github: "", 
    live: "https://hire-hub-by-youhibsheikh.vercel.app",
    image: hirehubImg,
    status: "Live",
    gradient: "from-blue-500/30 to-cyan-600/10",
    features: ["Job search", "Publish jobs", "User auth", "Applications"],
  },
  {
    id: "02",
    slug: "ecommerce-mini",
    title: "E-commerce Mini App",
    description: "MERN e-commerce with product listing, cart, and JWT authentication.",
    longDescription: "Product catalog, cart, checkout flow, admin panel, JWT auth, MongoDB backend.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/youhibsheikh05-rgb/project3",
    live: "",
    image: "https://ibb.co/mrYQg5Yx",
    status: "Completed",
    gradient: "from-purple-500/30 to-pink-600/10",
    features: ["Product listing", "Cart", "Admin", "Auth"],
  },
];