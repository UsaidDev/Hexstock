import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseContext } from './Components/FirebaseContext/FirebaseContext';
import firebase from '../src/Components/Firebase/config'
import Context from './Components/FirebaseContext/FirebaseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FirebaseContext.Provider value={{ firebase }}>
        <Context>
        <App />
        </Context>
      </FirebaseContext.Provider>
    </Router>
  </React.StrictMode>
);
