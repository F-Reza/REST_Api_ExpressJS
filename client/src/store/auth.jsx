
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const token = localStorage.getItem("token");
  // const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(""); 

  const storetokenInLS = (token) => {
    localStorage.setItem("token", token);
  };

  const removeTokenFromLS = () => {
    localStorage.removeItem("token");
  };

  let isLoggedIn = !!localStorage.getItem("token"); 



  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/profile", {
        method: "GET",  
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`, 
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("User data:", data);
        setUser(data);
        isLoggedIn = true; 
      } else {
        console.error("Failed to fetch user data");
        isLoggedIn = false; 
      }

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    userAuthentication();
  }, []);




  return (
    <AuthContext.Provider value={{ storetokenInLS, removeTokenFromLS, isLoggedIn, user}}>
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
