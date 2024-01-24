import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/repositories">
            Repositories
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
