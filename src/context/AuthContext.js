import { createContext } from "react";


// Basic data for context
export const AuthContext = createContext({
  token: null,
  userId: null,
  loginCheck: () => {},
  logout: () => {},
  isAuthenticated: false
})