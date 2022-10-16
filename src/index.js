import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Router
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Destination from "./components/Destination";
import Technology from "./components/Technology";
import Crew from "./components/Crew";
import NotFoundRoute from './components/NotFoundRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='destination' element={<Destination />}></Route>
          <Route path='crew' element={<Crew />}></Route>
          <Route path='technology' element={<Technology />}></Route>
        </Route>
        <Route path='*' element={<NotFoundRoute />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
