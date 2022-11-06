import React from "react";
import './bootstrap.min.css';
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/ReduxStore";
import {BrowserRouter, Routes, Route} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element = {<App/>} />
      </Routes>
  </BrowserRouter>
  </Provider>,
)


