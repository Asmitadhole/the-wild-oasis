import { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "../../src/hooks/useLocalStorageState";
import PropTypes from "prop-types";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(() => {
    // Apply the appropriate theme class
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }

    // Optional: Cleanup function
    return () => {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.remove("light-mode");
    };
  }, [isDarkMode]); // Dependency array to watch `isDarkMode`

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode); // Use functional update for safety
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
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }

  return context;
}

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

export { DarkModeProvider, useDarkMode };
