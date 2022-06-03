import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useLogin = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [userName, setUserName] = useState();

  const login = useCallback((uid, token, expirationDate, name) => {
    setToken(token);
    setUserId(uid);
    setUserName(name);
    const tokenExpirationDate =
      new Date(new Date().getTime() + expirationDate * 1000 * 60 * 60) ||
      new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate,
        userName: name,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setUserName(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      console.log(tokenExpirationDate + " hedhy el date mta exp");
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) { 
      console.log("login grace au stored data in local storage")
      console.log(storedData.userId)
      console.log(storedData.token)
      console.log(storedData.expiration)
      console.log(storedData.userName)
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration),
        storedData.userName
      );
    }
  }, [login]);

  return { token, login, logout, userId, userName };
};
