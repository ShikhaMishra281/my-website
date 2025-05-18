
import techcraat from '../assets/techcraat.png';
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];
import capgemini from "../assets/company/capg.jpg";
const experiences = [
  {
    title: "UPF Developer",
    company_name: "Capgemini IT India Pvt. Ltd.",
    icon: capgemini, // Same icon as above
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
      "Developing containerized microservices using Go, Docker and Kubernetes for 5G network applications.",
      "Implementing CI/CD workflows with Jenkins, reducing deployment time by 60%.",
      "Creating comprehensive test cases with 80% code coverage for robust application quality.",
      "Performing network optimization and packet analysis using specialized tools like Wireshark.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Capgemini IT India Pvt. Ltd.",
    icon: capgemini, // You'll need to import this icon
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Oct 2024",
    points: [
      "Developing responsive UI components using Angular, TypeScript, and Bootstrap, resulting in improved user satisfaction.",
      "Implementing data import/export functionality with progress indicators, handling 50,000+ records while maintaining UI responsiveness.",
      "Creating comprehensive Cypress test suites achieving 85% code coverage and reducing security vulnerabilities.",
      "Leading code reviews and mentoring junior developers, enhancing team code quality standards.",
    ],
  },
  
 
];

const testimonials = [
  {
    testimonial:
      "I didn't think a website could match the beauty of our product—until Shikha made it happen.",
    name: "Tarun Kumar Singh",
    designation: "R&D Firmware Engineer",
    company: "Mediatek",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never come across a web developer as genuinely invested in their clients' success as Shikha.",
    name: "Hemant Yadav",
    designation: "Senior Software Engineer",
    company: "Zopper",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Thanks to Shikha’s optimization, our website traffic soared by 50%. We're incredibly grateful!",
    name: "Shobit Gupta",
    designation: "Senior Android Developer",
    company: "ShiftOne",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "TechCraft",
    description:
    "TechCraft is a responsive e-commerce platform built with Angular and TypeScript, featuring seamless user experiences across all devices. The application implements advanced state management, RESTful API integration, and secure payment processing. With optimized load times and an intuitive interface, customers can easily browse products, filter by category, and complete purchases with confidence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: techcraat,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
