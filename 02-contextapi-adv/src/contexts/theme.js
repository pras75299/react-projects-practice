import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  themeMode: "Light",
  darkTheme: () => {
    console.log("hello");
  },
  lightTheme: () => {
    console.log("hello dark");
  },
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
