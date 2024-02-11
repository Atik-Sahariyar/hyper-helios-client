
import Cookies from "js-cookie";
import  { useEffect, useState, createContext } from "react"
import useInterceptor from "../Hooks/useInterceptor";

export  const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading ] = useState(true)
  const [user, setUser] = useState(null);
  const axios = useInterceptor();
 
  useEffect(() => {
    if (Cookies.get('accessToken')) {
      setLoading(false)
      setIsLoggedIn(true)
    } else {
      setLoading(true)
      setIsLoggedIn(false)
    }
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      axios.get("dj-rest-auth/user/").then(res => {
        setUser(res.data)
       
      }).catch(error => {
        console.log(error)
      })
    }
  }, [isLoggedIn, axios])
  

  const authInfo = {
    isLoggedIn,
    user,
    setIsLoggedIn,
    loading
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;