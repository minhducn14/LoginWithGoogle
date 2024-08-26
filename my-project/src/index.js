import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = 'YOUR_CLIENT_ID_HERE';

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="API key">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
