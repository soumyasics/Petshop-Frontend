import React, { createContext, useContext, useState } from "react";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [activeUserData, setActiveUserData] = useState(null);

  const updateUser = (userData) => {
    setActiveUserData(userData);
  };

  return (
    <UserContext.Provider value={{ activeUserData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  return useContext(UserContext);
};
