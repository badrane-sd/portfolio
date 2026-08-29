import styles from "./spinner.module.css";
const Spinner = () => {
  return (
    <div className={styles.containerSpinner}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
