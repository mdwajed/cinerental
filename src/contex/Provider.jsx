import { createContext, useReducer, useState } from "react";
import { CartReducer, initialState } from "../reducers/CartReducer";

export const MovieContex = createContext();
export const ThemeContext = createContext();
export const ContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <MovieContex.Provider value={{ state, dispatch }}>
      {children}
    </MovieContex.Provider>
  );
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
