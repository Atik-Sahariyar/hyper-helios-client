import Cookies from "js-cookie";
import { useEffect, useState, createContext, useCallback } from "react";
import useInterceptor from "../Hooks/useInterceptor";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axios = useInterceptor();

  const fetchUserData = useCallback(async () => {
    try {
      const accessToken = await Cookies.get('accessToken');
      if (accessToken) {
        setIsLoggedIn(true);
        setLoading(true);
        const response = await axios.get("dj-rest-auth/user/");
        if(response.data){
          setUser(response.data);
          setLoading(false)
        }
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error checking access token:", error);
      setUser(null);
      setIsLoggedIn(false);
      setLoading(false);
    }
  }, [axios]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const authInfo = {
    isLoggedIn,
    user,
    setIsLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
