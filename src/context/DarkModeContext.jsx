import { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "../../src/hooks/useLocalStorageState";
import PropTypes from "prop-types";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(function () {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  });

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }
  return context;
}

DarkModeContext.propTypes = {
  children: PropTypes.node.isRequired,
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DarkModeProvider, useDarkMode };
