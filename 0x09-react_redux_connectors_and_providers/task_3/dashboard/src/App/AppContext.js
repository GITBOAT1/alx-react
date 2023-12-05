import React, { createContext, useContext, useState } from 'react';

// Create a context with default values
const AppContext = createContext({
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  logOut: () => {},
  updateUser: () => {}, // Rename to setUpdateUser
  updateLogOut: () => {}, // Rename to setUpdateLogOut
});

// Create a provider component to wrap the application
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });

  let logOut = () => {
    console.log('Default logOut function');
  };

  const setUpdateUser = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  const setUpdateLogOut = (newLogOutFunction) => {
    logOut = newLogOutFunction;
  };

  // Create a context value object with local state and functions
  const contextValue = {
    user,
    logOut,
    setUpdateUser, // Rename to match the convention
    setUpdateLogOut, // Rename to match the convention
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Create a custom hook to access the context values
export const useAppContext = () => {
  return useContext(AppContext);
};
