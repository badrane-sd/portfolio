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
    addresses: {
      code: "https://github.com/badrane-sd/ecommerce",
      demo: "https://ecommerce-coral-nine-75.vercel.app/",
    },
    image: ecommerce,
  },
  {
    id: 2,
    title: "Dashboard",
    description: "Dashbord CSS",
    technologies: ["css"],
    complete: false,
    addresses: {
      code: "https://github.com/badrane-sd/daschboard-css",
      demo: "https://badrane-sd.github.io/daschboard-css/",
    },
    image: dashboard,
  },
];
