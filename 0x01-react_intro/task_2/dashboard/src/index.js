import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root_notifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
root_notifications.render(
  <React.StrictMode>
    <Notifications />
    </React.StrictMode>
);
