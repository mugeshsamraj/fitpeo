import React from "react";
import RecentOrder from "./RecentOrder";
import CustomerFeedback from "./CustomerFeedback";
import styles from "../styles/Dashboard.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SummaryCard from "./SummaryCard";
import Graph from "./Graph";
import Goals from "./Goals";

const Dashboard = ({ orders, feedbacks }) => {
  const totalOrders = 75;
  const totalDelivered = 70;
  const totalCancelled = 5;
  const totalRevenue = "$12k";
  const netProfit = "$6759.25";

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <Header />
      <div className={styles.content}>
        <div className={styles.cardContainer}>
          <div className={styles.leftCards}>
            <SummaryCard title="Total Orders" value={totalOrders} />
            <SummaryCard title="Total Delivered" value={totalDelivered} />
            <SummaryCard title="Total Cancelled" value={totalCancelled} />
            <SummaryCard title="Total Revenue" value={totalRevenue} />
          </div>
          <div className={styles.rightCard}>
            <SummaryCard title="Net Profit" value={netProfit} />
          </div>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.column}>
            <Graph />
            <p>&nbsp;</p>
            <RecentOrder orders={orders} />
          </div>
          <div className={styles.column}>
            <Goals />
            <p>&nbsp;</p>
            <CustomerFeedback feedbacks={feedbacks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
