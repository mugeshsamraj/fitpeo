import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faTruck,
  faTimes,
  faChartLine,
  faBox,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Dashboard</h2>
      <ul className={styles.navLinks}>
        <li>
          <a href="#totalOrders">
            <FontAwesomeIcon icon={faClipboardList} />
          </a>
        </li>
        <li>
          <a href="#totalDelivered">
            <FontAwesomeIcon icon={faTruck} />
          </a>
        </li>
        <li>
          <a href="#totalCancelled">
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </li>
        <li>
          <a href="#netProfit">
            <FontAwesomeIcon icon={faChartLine} />
          </a>
        </li>
        <li>
          <a href="#activity">
            <FontAwesomeIcon icon={faBox} />
          </a>
        </li>
        <li>
          <a href="#recentOrders">
            <FontAwesomeIcon icon={faClipboardList} />
          </a>
        </li>
        <li>
          <a href="#customerFeedback">
            <FontAwesomeIcon icon={faComments} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

