import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const themes = {
    light: {
      background_dark: "#F4F7FD",
      background: "#FFFFFF",
      text_dark: "#828FA3",
      text: '#000000',
      cta: "#635FC7",
      cta_hover: "#A8A4FF",
      red: "#EA5555",
      red_hover: "#FF9898",
      lines: "#E4EBFA"
    },
    dark: {
      background_dark: "#20212C",
      background: "#2B2C37",
      text_dark: "#828FA3",
      text: "#FFFFFF",
      cta: "#635FC7",
      cta_hover: "#A8A4FF",
      red: "#EA5555",
      red_hover: "#FF9898",
      lines: "#3E3F4E"
    },
};
