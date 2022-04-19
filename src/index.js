import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss';
import './scss/components/_index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);