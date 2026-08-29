import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Github = ({ styles }) => {
  return <FontAwesomeIcon icon={faGithub} className={styles.icon} />;
};

export default Github;
