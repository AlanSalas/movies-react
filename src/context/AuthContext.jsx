import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [isAuth, setIsAuth] = useState(user ? user : null);

  const login = (res) => {
    localStorage.setItem("profile", JSON.stringify(res?.profileObj));
    setIsAuth(res.profileObj);
  };

  const logOut = () => {
    localStorage.removeItem("profile");
    setIsAuth(null);
  };

  useEffect(() => {
    if (isAuth) {
      setIsAuth(isAuth);
    } else {
      setIsAuth(null);
      logOut();
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, logOut, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
