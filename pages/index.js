import React from "react";
import Dashboard from "../component/dashboard";
import { orders, feedbacks } from "../component/data";

const Home = () => {
  return <Dashboard orders={orders} feedbacks={feedbacks} />;
};

export default Home;

