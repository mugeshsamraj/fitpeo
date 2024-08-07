import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBullseye,
  faUtensils,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Goals.module.css";

const Goals = () => {
  const goals = [
    { name: "Goals", icon: faBullseye },
    { name: "Popular Dishes", icon: faUtensils },
    { name: "Menu", icon: faList },
    { name: "Goals", icon: faBullseye },
    { name: "Popular Dishes", icon: faUtensils },
    { name: "Menu", icon: faList },
  ]; 

  return (
    <div className={styles.goalsContainer}>
      {goals.map((goal, index) => (
        <div key={index} className={styles.goal}>
          <FontAwesomeIcon icon={goal.icon} className={styles.goalIcon} />
          <span className={styles.goalName}>{goal.name}</span>
          <FontAwesomeIcon icon={faArrowRight} className={styles.goalArrow} />
        </div>
      ))}
    </div>
  );
};

export default Goals;
