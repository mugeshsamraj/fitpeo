import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "../styles/Graph.module.css";
import "../chartSetup"; 

const Graph = () => {
  const data = {
    labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25"],
    datasets: [
      {
        label: "Activity",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.8)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: [5000, 4000, 6000, 8000, 9000, 7000, 10000, 11000, 12000, 13000],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ffffff", // Y-axis labels color
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Y-axis grid lines color
        },
      },
      x: {
        ticks: {
          color: "#ffffff", // X-axis labels color
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // X-axis grid lines color
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", // Legend text color
        },
      },
    },
  };

  return (
    <div className={styles.graphContainer}>
      <h3>Activity</h3>
      <div className={styles.graph}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
