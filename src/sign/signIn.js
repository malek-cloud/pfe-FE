import React, { useRef, useState } from "react";
import FacebookAuth from "./facebookAuth";
import axios from "axios";
import GoogleOauth from "./googleOauth";
import { useLoginFunction } from "../context/loginContext";

function SignIn(props) {
const login = useLoginFunction()
  const email = useRef();
  const [load, setLoad] = useState(false);
  const [alert, setAlert] = useState("");
  const password = useRef();
  const signIn = async () => {
    login(email.current.value, password.current.value);
    /* console.log(email + " hedha el email");
    try {
      setLoad(true);
      const data = await axios.post(process.env.REACT_APP_BACKEND_URL + "users/login", {
        email: email.current.value,
        password: password.current.value,
      });
      console.log(data.status);
      console.log(data.data);
      if (data.status === 200) {
        auth.login(
          data.data.client._id,
          data.data.token,
          data.data.expiryDate,
          data.data.client.prenom
        );

        setLoad(false);
      }
    } catch (err) {
      setLoad(false);
      setAlert("email ou mot de passe incorrect");
     
        setTimeout(() => {
          setAlert("");
        }, 3000);
      console.log(err + " hedhy el erreur");
    } */
  };
  return (
    <div className="loginComponent">
      <div className="login">Sign In</div>
      <div className="inlineButtons">
        <FacebookAuth />
        <GoogleOauth />
      </div>
      <div className="loginInput">
        <div className="emailSpace">
          <div className="emailLabel">Email</div>
          <input
            autoComplete="on"
            ref={email}
            className="emailInput"
            type="email"
            placeholder="email.."
          />
        </div>
        <div className="emailSpace">
          <div className="emailLabel">Password</div>
          <input
            autoComplete="on"
            ref={password}
            className="emailInput"
            type="password"
            placeholder="password.."
          />
        </div>
      </div>

      {load ? (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "16px", marginLeft: "7vw", marginBottom: "16px" }}
        >
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="logInButton" onClick={signIn}>
          Sign In
        </div>
      )}
    
      <div className="inscri">
        <div className="inscriQuestion">
          Don't you have an account yet ?{" "}
        </div>
        <div className="inscriLink" onClick={props.log}>
          Create one
        </div>
      </div>
      {alert==="" ? <div></div> : <div className="alert">{alert}</div> }
    </div>
  );
}

export default SignIn;
