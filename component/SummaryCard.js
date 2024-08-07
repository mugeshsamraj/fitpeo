import React from "react";
import styles from "../styles/SummaryCard.module.css";

const SummaryCard = ({ title, value }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default SummaryCard;
