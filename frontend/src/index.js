// Start with 'npm start' requires backend node server running for functionality
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="sapp">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
