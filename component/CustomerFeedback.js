import React from "react";
import styles from "../styles/CustomerFeedback.module.css";

const CustomerFeedback = ({ feedbacks }) => {
  return (
    <div className={styles.customerFeedback}>
      <h2>Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div className={styles.feedback} key={index}>
          <img
            src={feedback.customerImg}
            alt={feedback.customerName}
            className={styles.customerImg}
          />
          <div className={styles.feedbackText}>
            <p className={styles.name}>{feedback.customerName}</p>
            <p className={styles.stars}>{"★".repeat(feedback.stars)}</p>
            <p>{feedback.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
