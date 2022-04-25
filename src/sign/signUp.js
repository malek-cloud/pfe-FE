import React, { useRef,useState , useContext} from "react";
import FacebookAuth from "./facebookAuth";
import GoogleOauth from "./googleOauth"
import { AuthContext } from "../context/loginContext";
import axios from "axios";
function SignUp(props) {
  const auth = useContext(AuthContext);
  const email = useRef();
  const password = useRef();
  const prenom = useRef();
  const nom = useRef();
  const phone = useRef();
  const [load, setLoad] = useState(false);
  const signUp = async () => {
    try {
      setLoad(true);
      const data = await axios.post(
        "http://localhost:5000/users/createClient",
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
      console.log(err + " hedhy el erreur");
    }
  };
  return (
    <div className="loginComponent">
      <div className="login1">Créer un compte</div>
      <div className="inlineButtons">
        <FacebookAuth />
        <GoogleOauth />
      </div>
      <div className="loginInputinline">
        <div className="inputSpace">
          <div className="inputLabel">Prénom</div>
          <input
            autoComplete="on"
            ref={prenom}
            className="inputField1"
            type="text"
            placeholder="prénom.."
          />
        </div>
        <div className="inputSpace">
          <div className="inputLabel">Nom</div>
          <input
            autoComplete="on"
            ref={nom}
            className="inputField1"
            type="text"
            placeholder="Nom.."
          />
        </div>
        <div className="inputSpace">
          <div className="inputLabel">Téléphone</div>
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
          <div className="inputLabel">Mot de passe</div>
          <input
            autoComplete="on"
            ref={password}
            className="inputField"
            type="password"
            placeholder="mot de passe.."
          />
        </div>
      </div>

      {load ? <div className="d-flex justify-content-center" style={{marginTop  : "16px",  marginLeft : "7vw" , marginBottom : "16px"}}>
        <div className="spinner-border" role="status">
        </div>
      </div> : <div className="logInButton1" onClick={signUp}>
        Créer Votre Compte
      </div>
      }

      <div className="inscri" style={{ marginTop: "10px" }}>
        <div className="inscriQuestion">Vous avez déja un compte ? </div>
        <div className="inscriLink" onClick={props.log}>
          Connectez-Vous
        </div>
      </div>
    </div>
  );
}

export default SignUp;
