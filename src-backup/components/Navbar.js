"use client";

import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <span>Triumph AI Hub</span>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/howto">
          <span>Workflows</span>
        </Link>
        <Link href="/tipsnips">
          <span>Resources</span>
        </Link>
        <Link href="/resources">
          <span>Community</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
