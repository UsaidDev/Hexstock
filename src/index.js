import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseContext } from './Components/FirebaseContext/FirebaseContext';
import firebase from '../src/Components/Firebase/config'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FirebaseContext.Provider value={{ firebase }}>
        <App />
      </FirebaseContext.Provider>
    </Router>
  </React.StrictMode>
);
