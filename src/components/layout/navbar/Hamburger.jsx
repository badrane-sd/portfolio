export function Hamburger({ open, onClick, styles }) {
  return (
    <button
      className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
      onClick={onClick}
      aria-label="Menu"
    >
      <span className={`${styles.bar}`} />
      <span className={`${styles.bar}`} />
      <span className={`${styles.bar}`} />
    </button>
  );
}
