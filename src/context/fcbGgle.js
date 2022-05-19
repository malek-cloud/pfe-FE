import React, { useContext, useState } from "react";
export const nameContext = React.createContext();
export const emailContext = React.createContext();
export const getNameContext = React.createContext();
export const getEmailContext = React.createContext();

export function useName() {
  return useContext(nameContext);
}
export function useEmail() {
  return useContext(emailContext);
}
export function useNameUpdate() {
  return useContext(getNameContext);
}
export function useEmailUpdate() {
      return useContext(getEmailContext);
    }
export function FcbggleProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function getEmail(e) {

    setEmail(e);
    console.log(email )

  }
  function getName(e) {
      setName(e);
      console.log(name )
    }
  return (
    <nameContext.Provider value={name}>
      <emailContext.Provider value={email}>
        <getNameContext.Provider value={getName}>
        <getEmailContext.Provider value={getEmail}>
          {children}
        </getEmailContext.Provider>
        </getNameContext.Provider>
      </emailContext.Provider>
    </nameContext.Provider>
  );
}
