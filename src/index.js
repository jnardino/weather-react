import React from 'react';
import ReactDOM from 'react-dom/client';

import Videos from "./Videos";
import Swap from "./Swap";
import AppBox from "./AppBox";
import "./weather-style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Videos />
      <Swap />
      <AppBox />
    </div>
  </React.StrictMode>
);
