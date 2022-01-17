import { useCallback, useEffect, useState } from "react";

const storageName = 'userData';

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);

  const loginCheck = useCallback(jwtToken => {
    setIsAuth(jwtToken);

    localStorage.setItem(storageName, JSON.stringify({
        token: jwtToken
    }));
  }, []);

  const logout = useCallback(() => {

    setIsAuth(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      loginCheck(data.token);
    }
  }, [loginCheck]);

  return { loginCheck, logout, isAuth };
}

export default useAuth;