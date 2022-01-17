import { createContext } from "react";

// Basic data for context
export const AuthContext = createContext({
  isAuth: null,
  loginCheck: () => {},
  logout: () => {},
  isAuthenticated: false
});