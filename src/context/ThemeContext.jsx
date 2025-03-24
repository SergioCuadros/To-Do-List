import { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../themes/theme";

export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const theme = useMemo(() => getTheme(darkMode ? "dark" : "light"), [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
