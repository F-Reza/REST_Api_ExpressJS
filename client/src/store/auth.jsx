
import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const storetokenInLS = (token) => {
    localStorage.setItem("token", token);
  };

  const removeTokenFromLS = () => {
    localStorage.removeItem("token");
  };

  let isLoggedIn = !!localStorage.getItem("token"); 

  return (
    <AuthContext.Provider value={{ storetokenInLS, removeTokenFromLS, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}


// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
