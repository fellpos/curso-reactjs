import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app/index';
import Contato from './pages/contato'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);