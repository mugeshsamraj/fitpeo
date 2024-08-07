// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// import Dashboard from "./dashboard";
// import RecentOrders from "../component/RecentOrder";
// const inter = Inter({ subsets: ["latin"] });
// export default function Home() {
//   return (
//     <>
//       <Dashboard />
//       <RecentOrders orders={orders} />
//     </>
//   );
// }

import React from "react";
import Dashboard from "../component/dashboard";
import { orders, feedbacks } from "../component/data";

const Home = () => {
  return <Dashboard orders={orders} feedbacks={feedbacks} />;
};

export default Home;

