// // // context/AuthContext.js

// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const signIn = async (email, password) => {
//     // Simulated asynchronous sign-in process
//     await new Promise((resolve, reject) => {
//       // Simulate authentication with some delay
//       setTimeout(() => {
//         // Check if email and password match some predefined values
//         if (email === 'user@example.com' && password === 'password') {
//           // Set isAuthenticated to true if authentication is successful
//           setIsAuthenticated(true);
//           resolve();
//         } else {
//           // Reject with an error message if authentication fails
//           reject(new Error('Invalid email or password'));
//         }
//       }, 1000); // Simulate a 1-second delay
//     });
//   };

//   const signOut = () => {
//     // Simulate sign-out by setting isAuthenticated to false
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = async (email, password) => {
    // Simulated asynchronous sign-in process
    await new Promise((resolve, reject) => {
      // Simulate authentication with some delay
      setTimeout(() => {
        // Check if email and password match some predefined values
        if (email === 'user@example.com' && password === 'password') {
          // Set isAuthenticated to true if authentication is successful
          setIsAuthenticated(true);
          resolve();
        } else {
          // Reject with an error message if authentication fails
          reject(new Error('Invalid email or password'));
        }
      }, 1000); // Simulate a 1-second delay
    });
  };

  const signOut = () => {
    // Simulate sign-out by setting isAuthenticated to false
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
