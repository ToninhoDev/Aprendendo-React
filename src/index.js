import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-style.css';

import Home from './components/templates/Home/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


