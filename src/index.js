import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, HashRouter  } from 'react-router-dom'
// import ErrorBoundary from './views/ErrorBoundary'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Provider store={store}> 
    <App />
 </Provider>,
  </BrowserRouter >
);
reportWebVitals();


