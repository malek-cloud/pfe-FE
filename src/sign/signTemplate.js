import React, {useState} from "react";
import "./sign.css";
import SignIn from "./signIn";
import SignUp from "./signUp"
function SignTemplate() {
  const [login, setLogin]=useState(true);
  const authTyp= ()=>{
    setLogin(!login)
  }
  return (
    <div className="SignTemplate">
      <div className="boxSign">
        <div className="smallPurpleSide">
          <div className="completeLogo1">
            <img src="/images/makerSkillsUp.jpg" className="logotext1" alt="" />
            <div className="nameLogo1">
              Maker  Skills Up
            </div>
            
          </div>
          <div className="signDescription">
            Connectez-vous En quelques clics pour y acceder et acheter vos articles désirés
            </div>
        </div>

        <div className="smallWhiteSide">
        {login ? <SignIn log={authTyp}/> : <SignUp log={authTyp}/>}

        </div>
      </div>
    </div>
  );
}

export default SignTemplate;
