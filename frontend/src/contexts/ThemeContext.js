import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Check for saved theme in localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light');
    }
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);  // Save theme to localStorage
      return newTheme;
    });
  };

  // Apply the theme to the body element
  useEffect(() => {
    document.body.className = theme;  // You can style the body based on the theme
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
