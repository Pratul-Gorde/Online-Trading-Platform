import React from "react";
import { Route, Routes } from "react-router-dom";
import {useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const navigate = useNavigate();
 useEffect(() => {
  axios.get("https://online-trading-platform-backend.onrender.com/verify-token", {
    withCredentials: true,
  })
  .then((res) => {
    console.log("User is authenticated:", res.data.user);
  })
  .catch((err) => {
    console.error("Unauthorized:", err);
    alert("Unauthorized! Redirecting to login...");
    window.location.href = "https://online-trading-platform-frontend.onrender.com/login";
  });
}, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
