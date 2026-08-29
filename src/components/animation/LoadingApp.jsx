import { useState, useEffect } from "react";
import styles from "./loadingApp.module.css";

const LoadingApp = () => {
  const [loading, setLoading] = useState(() => {
    // const session = sessionStorage.getItem("appLoaded");
    // return session ? true : false;
    return sessionStorage.getItem("appLoaded") === "true";
  });

  useEffect(() => {
    const DELAY = 7300;
    if (loading) {
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      sessionStorage.setItem("appLoaded", "true");
    }, DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  if (loading) return null;
  return (
    <div className={styles.intro}>
      <div className={styles.first}>
        <span>BAD</span>
      </div>
      <div className={styles.middle}></div>
      <div className={styles.last}>
        <span>RANE</span>
      </div>
    </div>
  );
};

export default LoadingApp;
