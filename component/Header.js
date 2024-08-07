import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>FitFeo</div>
      <input type="text" className={styles.searchBar} placeholder="Search..." />
      <div className={styles.userProfile}>
        <div>User</div>
        <img src="https://via.placeholder.com/40" alt="User" />
      </div>
    </div>
  );
};

export default Header;

