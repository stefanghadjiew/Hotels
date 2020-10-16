import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { DatabaseProvider } from "./DatabaseContext";


ReactDOM.render(
  <React.StrictMode>
    <DatabaseProvider>
      <Router>
        <App />
      </Router>
    </DatabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



