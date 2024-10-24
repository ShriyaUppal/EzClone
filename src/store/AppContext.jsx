import React, { createContext, useContext, useState } from "react";

// Creating context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};
