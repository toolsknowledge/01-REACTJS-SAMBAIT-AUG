import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Master from './components/Master';
import {BrowserRouter as SPA} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SPA>
    <Master />
  </SPA>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
