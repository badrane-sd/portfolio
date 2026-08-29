import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadIcon = ({ styles }) => {
  return <FontAwesomeIcon icon={faDownload} className={styles.icon} />;
};

export default DownloadIcon;
