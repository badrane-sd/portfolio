// data/projects.js
import ecommerce from "../../assets/images/projects/ecommerce.jpg";
import dashboard from "../../assets/images/projects/dashboard.jpg";
export const LISTPROJECTS = [
  {
    id: 1,
    title: "eCommerce",
    description: "Application Ecommerce",
    technologies: ["React", "Zustand", "CSS"],
    complete: true,
    addresses: { code: "www.github.code", demo: "www.github.demo" },
    image: ecommerce,
  },
  {
    id: 2,
    title: "Dashboard",
    description: "Dashbord Tailwind",
    technologies: ["css"],
    complete: false,
    addresses: {
      code: "https://www.github.code",
      demo: "https://www.github.demo",
    },
    image: dashboard,
  },
];
