import React, { useContext, useState,useEffect } from "react";
import axios from "axios";
export const deconnectionStateContext = React.createContext();
export const logoutContext = React.createContext();
export const loginContext = React.createContext();
export const SignUpContext = React.createContext();
export const dataContext = React.createContext();

export function useLoginFunction() {
  return useContext(loginContext);
}
export function useDataContext() {
  return useContext(dataContext);
}
export function useSignUpFunction() {
  return useContext(SignUpContext);
}
export function useDeconnectionState() {
  return useContext(deconnectionStateContext);
}
export function useLogoutFunction() {
  return useContext(logoutContext);
}
export function AuthProvider({ children }) {
  const [out, setOut] = useState(true);
  const [datac, setData] = useState();

  const login = async (email, pwd) => {
    try {
      const data = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "users/login",
        {
          email: email,
          password: pwd,
        }
      );
      console.log(data.status)
      if (data.status === 200) {
          setData(data.data)
        localStorage.setItem("userData", JSON.stringify(data.data));
        setOut(false);
    window.location.reload(true);
      }
    } catch (err) {
      console.log(err + " hedhy el erreur");
    }
  };

  const signUp = async (nom, prenom, email, phone, pwd) => {
    try {
      const data = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "users/createClient",
        {
          nom: nom,
          prenom: prenom,
          email: email,
          numero: phone,
          password: pwd,
        }
      );
      if (data.status === 201) {
        setData(data.data)
        localStorage.setItem("userData", JSON.stringify(data.data));
        setOut(false);
    window.location.reload(true);

      }
    } catch (err) {
      console.log(err + " hedhy el erreur mta signUp");
    }
  };
  const logout = () => {
    setData()
    localStorage.removeItem("userData");
    localStorage.clear();

    setOut(true);
    window.location.reload(true);

  };

  return (
    <loginContext.Provider value={login}>
      <SignUpContext.Provider value={signUp}>
        <logoutContext.Provider value={logout}>
          <deconnectionStateContext.Provider value={out}>
          <dataContext.Provider value={datac}>
            {children}
          </dataContext.Provider>
          </deconnectionStateContext.Provider>
        </logoutContext.Provider>
      </SignUpContext.Provider>
    </loginContext.Provider>
  );
}
