// src/components/RecentOrder.js
import React from "react";
import styles from "../styles/RecentOrders.module.css";

const RecentOrder = ({ orders }) => {
  return (
    <div className={styles.recentOrders}>
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <img
                  src={order.customerImg}
                  alt={order.customerName}
                  className={styles.customerImg}
                />
                {order.customerName}
              </td>
              <td>{order.orderNo}</td>
              <td>${order.amount}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    styles[order.status.toLowerCase()]
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrder;
