import styles from "./projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// import { LISTPROJECTS } from "../../data/ListProjects";
import { LISTPROJECTS } from "../../data/projects/ListProjects";

export default function Projects() {
  return (
    <section className={`${styles.projects} `}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.wrapper}>
        {LISTPROJECTS.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.boxImg}>
              <img src={project.image} alt="project image" />
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.techUsed}>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className={styles.btns}>
              <a
                href={project.addresses.code}
                target="_blank"
                className={styles.link + " " + styles.code}
              >
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                Code
              </a>
              <a
                href={project.addresses.demo}
                target="_blank"
                className={styles.link + " " + styles.demo}
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={styles.icon}
                />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
