import React, { createContext, useContext, useState } from 'react';

// Create a context with default values
const AppContext = createContext({
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  logOut: () => {},
  updateUser: () => {},
  updateLogOut: () => {},
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

  const updateUser = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  const updateLogOut = (newLogOutFunction) => {
    logOut = newLogOutFunction;
  };

  // Create a context value object with local state and functions
  const contextValue = {
    user,
    logOut,
    updateUser,
    updateLogOut,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Create a custom hook to access the context values
export const useAppContext = () => {
  return useContext(AppContext);
};
