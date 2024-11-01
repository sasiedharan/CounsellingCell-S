import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';  // Import AppProvider correctly
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-bmj7rhly6ehrkkrh.us.auth0.com"
    clientId="ghB425WjOYIH6YDijNyPiw5agTi8xagm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <App />
     </AppProvider>
 </Auth0Provider>
);

