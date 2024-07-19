import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root container using the element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Start measuring performance in your app, pass a function to log results
reportWebVitals();
