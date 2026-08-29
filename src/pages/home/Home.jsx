import styles from "./home.module.css";
// import maPhoto from "../../assets/images/ma photo/moi.webp";
import maPhoto from "../../assets/images/ma photo/home.png";

import { SOCIALMEDIA } from "../../data/socialMedia";

import { NavLink } from "react-router-dom";
import DownloadIcon from "../../components/icons/others/DownloadIcon";
import DownloadCv from "./DownloadCv";

export default function Home() {
  return (
    <section className={`page ${styles.home}`}>
      <div className={styles.left}>
        <div className={styles.social}>
          {SOCIALMEDIA.map((media) => {
            const Icon = media.icon;
            return (
              <a key={media.href} href={media.href} target="_blank">
                <Icon styles={styles} />
              </a>
            );
          })}
        </div>
        <div className={styles.presentation}>
          <div>
            <h1>
              Hi, I'm <span>Badrane</span>
            </h1>
            <p>
              Développeur front-end passionné par l'interface entre design et
              code. J'utilise Reactjs pour transformer des maquettes en
              expériences fluides et interactives. Curieux et perfectionniste,
              j'aime optimiser chaque pixel et chaque milliseconde pour offrir
              le meilleur rendu possible.
            </p>
          </div>
          <div className={styles.btns}>
            <button className={styles.hireBtn}>
              <NavLink to="/contact">Hire me</NavLink>
            </button>
            <button className={styles.resumeBtn}>
              <DownloadIcon styles={styles} />
              <DownloadCv />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.boxImg}>
          <img src={maPhoto} alt="my photo" />
        </div>
      </div>
    </section>
  );
}
