import styles from "./about.module.css";
import about from "../../assets/images/about/about.png";

import { SKILLS } from "../../data/Skills";
import { DIPLOMAS } from "../../data/Diplomas";

const About = () => {
  return (
    <section className={`page ${styles.about}`}>
      <h1 className={styles.title}>About me</h1>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.boxImg}>
            <img src={about} alt="about me" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.boxText}>
            <p className={styles.text}>
              Développeur front-end passionné par l'interface entre design et
              code, j'utilise Reactjs pour transformer des maquettes en
              expériences fluides et interactives. Curieux et perfectionniste,
              j'aime optimiser chaque pixel et chaque milliseconde pour offrir
              le meilleur rendu possible. Ce qui me motive aujourd'hui : évoluer
              vers le full-stack. Autodidacte dans l'âme, j'apprends vite et
              j'aime creuser pour devenir capable de concevoir et déployer des
              applications complètes, de la base de données à l'interface.
            </p>
          </div>
          <div className={styles.education}>
            <h2>Education</h2>
            <div className={styles.diplomes}>
              {DIPLOMAS.map((diploma) => {
                const IconDiplome = diploma.icon;
                return (
                  <div key={diploma.type} className={styles.dipl}>
                    <div className={styles.diplIcon}>
                      <IconDiplome />
                    </div>
                    <div className={styles.dipDetails}>
                      <h4>{diploma.type}</h4>
                      <p>{diploma.speciality}</p>
                      <h5>{diploma.university}</h5>
                      <p>{diploma.year}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.wrapperSkills}>
          {SKILLS.map((skill) => {
            const IconSkill = skill.icon;
            return (
              <div
                key={skill.name}
                className={styles.skill}
                style={{ "--hover-width": `${skill.proficiency}%` }}
              >
                <div className={styles.boxIcon}>
                  {/* <FontAwesomeIcon icon={faReact} className={styles.skillIcon} /> */}
                  <IconSkill />
                  <p>{skill.name}</p>
                </div>
                <div className={styles.proficiency}>
                  <p>
                    <span>Proficiency</span>
                    <span
                      className={styles.percent}
                      style={{
                        backgroundColor: skill.color,
                      }}
                    >
                      {skill.proficiency}%
                    </span>
                  </p>
                  <div className={styles.bar}>
                    <div
                      className={styles.progress}
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
