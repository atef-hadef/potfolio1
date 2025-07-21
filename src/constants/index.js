import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  pandas,
  R,
  jupyter,
  tensorflow,
  pytorch,
  scikitlearn,
  spring,
  hotel,
  mytek_tunisianet,
  alm,
  tekup,
  attijari,
  
} from "../assets";

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
    title: "Analyse de Données",
    icon: web,
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: web,
  },
  {
    title: "LLMs & Chatbots IA",
    icon: web,
  },
  {
    title: "Systèmes RAG (Retrieval-Augmented Generation)",
    icon: web, 
  },
  {
    title: "Web Scraping & Automatisation",
    icon: web,
  },
  {
    title: "Visualisation & Dashboard BI",
    icon: web,
  },
];


const technologies = [
  {
    name: "Python",
    icon: python, // Replace with appropriate icon
  },
  {
    name: "R",
    icon: R, // Replace with appropriate icon
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "spring",
    icon: spring, // Replace with appropriate icon
  },
  {
    name: "TensorFlow",
    icon: tensorflow, // Replace with appropriate icon
  },
  {
    name: "PyTorch",
    icon: pytorch, // Replace with appropriate icon
  },
  {
    name: "Pandas",
    icon: pandas, // Replace with appropriate icon
  },
  {
    name: "NumPy",
    icon: nodejs, // Replace with appropriate icon
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Scikit-learn",
    icon: scikitlearn, // Replace with appropriate icon
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Jupyter",
    icon: jupyter, // Replace with appropriate icon
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Summer Intern - Python & Java Certification",
    company_name: "TEK-UP University",
    icon: tekup, // remplace 'tekup' par l'icône de ton université ou une image générique
    iconBg: "#004e89",
    date: "July 2024 - August 2024",
    points: [
      "Completed intensive summer internship focused on software development and certification.",
      "Earned two international certifications: PCAP (Python Certified Associate) and OCA (Oracle Certified Associate - Java).",
      "Built mini-projects in Python and Java to demonstrate understanding of object-oriented programming and data structures.",
      "Collaborated with fellow students in supervised lab sessions to solve algorithmic and back-end problems.",
    ],
  },
  {
    title: "Summer Intern - Data Analysis & Operational Efficiency",
    company_name: "Attijari Bank (Head Office)",
    icon: attijari, // remplace 'attijari' par l’icône du logo Attijari Bank
    iconBg: "#e0a800",
    date: "July 2025 - August 2025",
    points: [
      "Conducted data analysis on operational activities and employee workloads across various departments.",
      "Built predictive models to estimate Full-Time Equivalent (FTE) requirements for optimal resource allocation.",
      "Contributed to a strategic project on use case rationalisation and reengineering processes to improve operational efficiency.",
      "Delivered dashboards and reports to help decision-makers evaluate the bank's dimensionnement structure.",
    ],
  },
];



const projects = [
  {
    name: "Travel Agency Web App",
    description:
      "A full-featured web application for booking flights, hotels, and travel packages, with an admin dashboard and multilingual support, built using Symfony 6.4.",
    tags: [
      {
        name: "symfony",
        color: "blue-text-gradient",
      },
      {
        name: "doctrine",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with appropriate image
    source_code_link: "https://github.com/atef-hadef/travel_agency.git",
  },
  {
    name: "Hotel Management System - Spring Boot",
    description:
    "A full-stack hotel management web application built with Spring Boot, Thymeleaf, and Bootstrap. It features room booking, client management, and a responsive website with an admin dashboard.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "thymeleaf",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: hotel, // Replace with appropriate image
    source_code_link: "https://github.com/atef-hadef/gestion_hotel.git",
  },
  {
    name: "Laptop Scraper & Comparison Website",
    description:
    "A smart web application that scrapes laptops from MyTek and Tunisianet based on user-selected filters (type, processor, and price). The scraping is triggered dynamically from the website, and results are displayed in a unified, interactive interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: mytek_tunisianet, // Replace with appropriate image
    source_code_link: "https://github.com/atef-hadef/scrape_mytek_tunisianet.git",
  },
  {
    name: "Client Risk Prediction System",
    description:
    "A full-stack web application for bank loan officers to visualize client data and predict credit risk using a machine learning model. Built with Python (Flask/FastAPI) for ML scoring and TypeScript (React) for a modern frontend, the system provides real-time predictions and decision-support dashboards.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
    ],
    image: alm, // Replace with appropriate image
    source_code_link: "https://github.com/atef-hadef/alm_bank.git",
  },
];

export { services, technologies, experiences, projects };