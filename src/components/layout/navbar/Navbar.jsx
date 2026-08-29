import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

import { LINKS } from "./Links";
import { Hamburger } from "./Hamburger";
// context
import { useTheme } from "../../../context/useTheme";

import Moon from "../../icons/others/Moon";
import Sun from "../../icons/others/Sun";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Appel du context
  const { isDark, toggleTheme } = useTheme();

  // rendre ie header sticky aprés 30px
  useEffect(() => {
    // console.log("useeffect s'execute");
    const handleScoll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScoll);

    return () => window.removeEventListener("scroll", handleScoll);
  }, []);

  // Bloquer le scroll quand menu ouvert
  //   useEffect(() => {
  //     document.body.style.overflow = open ? "hidden" : "";
  //     return () => {
  //       document.body.style.overflow = "";
  //     };
  //   }, [open]);

  // Fermer avec Échap
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      {/* ── Header ── */}
      <header
        className={`${styles.header} ${scrolled ? styles.navbarScrolled : ""}`}
      >
        {/* Logo */}

        <div className={styles.logo}>Badrane</div>

        {/* Nav desktop */}
        <nav
          className={`${styles.navDesktop} ${scrolled ? styles.navScrolled : ""} `}
        >
          <ul className={styles.ul}>
            {LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navlink} ${styles.active}`
                      : styles.navlink
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* rightHeader */}
        <div className={styles.rightHeader}>
          {/* mode light / dark */}
          {isDark ? (
            <Sun className={styles.icon} toggleTheme={toggleTheme} />
          ) : (
            <Moon className={styles.icon} toggleTheme={toggleTheme} />
          )}
          <NavLink
            to="/contact"
            className={`${styles.contactBtn} ${scrolled ? styles.contactScrolled : ""}`}
          >
            Contact me
          </NavLink>
          {/* Hamburger */}
          <Hamburger
            open={open}
            onClick={() => setOpen(!open)}
            styles={styles}
            darkMode={isDark}
          />
        </div>
      </header>

      {/* ── Overlay ── */}
      {/* <div
        className={`${styles.overlay} ${open ? styles.overlayShow : ""}`}
        onClick={closeMenu}
      /> */}

      {/* ── Nav mobile ── */}
      <nav
        className={`${styles.navMobile} ${open ? styles.navMobileOpen : ""}`}
      >
        <ul className={styles.mobileUl}>
          {LINKS.map((link) => (
            <li key={link.label} className={`${styles.mobileLink}`}>
              <NavLink
                to={link.to}
                className={styles.navlink}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
