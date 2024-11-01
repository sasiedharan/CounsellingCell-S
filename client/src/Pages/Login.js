// src/Pages/Login.js
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  

  useEffect(() => {
    if (isAuthenticated && user) {
      // Send user data to backend after successful login
      const sendUserData = async () => {
        try {
          console.log(user?.picture);
          await axios.post('http://localhost:3001/users', {
            username: user.name,
            useremail: user.email,
            userimage: user?.picture
            
          });
          console.log("User data sent to backend");
        } catch (error) {
          console.error("Error sending user data to backend:", error);
        }
      };

      sendUserData();
    }
  }, [isAuthenticated, user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Login to Counselling Cell</h1>

        {/* Conditionally render based on Auth0 authentication */}
        {!isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Log In
          </button>
        ) : (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-red-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-red-700 transition-colors duration-200"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};
