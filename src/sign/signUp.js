import React, { useRef, useState } from "react";
import FacebookAuth from "./facebookAuth";
import GoogleOauth from "./googleOauth";
import { useSignUpFunction } from "../context/loginContext";
function SignUp(props) {
  const signup = useSignUpFunction();

  const email = useRef();
  const password = useRef();
  const prenom = useRef();
  const nom = useRef();
  const phone = useRef();
  const [load, setLoad] = useState(false);
  const signUp = async () => {
    signup(
      nom.current.value,
      prenom.current.value,
      email.current.value,
      phone.current.value,
      password.current.value
    );
    /* try {
      setLoad(true);
      const data = await axios.post(
        process.env.REACT_APP_BACKEND_URL +"users/createClient",
        {
          nom: nom.current.value,
          prenom: prenom.current.value,
          email: email.current.value,
          numero: phone.current.value,
          password: password.current.value,
        }
      );
      console.log(data.status);
      console.log(data);
      if (data.status === 201) {
         
        auth.login(data.data.client._id, data.data.token, data.data.expiryDate, data.data.client.prenom);
        setLoad(false);
      }
    } catch (err) {
      console.log(err + " hedhy el erreur mta signUp");
    } */
  };
  return (
    <div className="loginComponent">
      <div className="login1">Create an account</div>
      <div className="inlineButtons">
        <FacebookAuth />
        <GoogleOauth />
      </div>
      <div className="loginInputinline">
        <div className="inputSpace">
          <div className="inputLabel">Fist Name</div>
          <input
            autoComplete="on"
            ref={prenom}
            className="inputField1"
            type="text"
            placeholder="first name.."
          />
        </div>
        <div className="inputSpace">
          <div className="inputLabel">Last Name</div>
          <input
            autoComplete="on"
            ref={nom}
            className="inputField1"
            type="text"
            placeholder="last name.."
          />
        </div>
        <div className="inputSpace">
          <div className="inputLabel">Phone</div>
          <input
            autoComplete="on"
            ref={phone}
            className="inputField1"
            type="number"
            placeholder="phone.."
          />
        </div>
      </div>
      <div className="loginInputinline">
        <div className="inputSpace">
          <div className="inputLabel">Email</div>
          <input
            autoComplete="on"
            ref={email}
            className="inputField"
            type="email"
            placeholder="email.."
          />
        </div>
        <div className="inputSpace">
          <div className="inputLabel">Password</div>
          <input
            autoComplete="on"
            ref={password}
            className="inputField"
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
        <div className="logInButton1" onClick={signUp}>
          Sign Up
        </div>
      )}

      <div className="inscri" style={{ marginTop: "10px" }}>
        <div className="inscriQuestion">Do you already have an account ? </div>
        <div className="inscriLink" onClick={props.log}>
          Sign In
        </div>
      </div>
    </div>
  );
}

export default SignUp;
