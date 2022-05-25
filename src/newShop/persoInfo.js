import React from "react";
import "./order.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/loginContext";
import { totalContext } from "../context/cardContext";
import { useEmail, useName } from "../context/fcbGgle";
function PersoInfo() {
  const [client, setClient] = useState(" enaaa feraz'");
  const email = useEmail();
  const name = useName();
  const [reload, setReload] = useState(false);
  const auth = useContext(AuthContext);
  const price = useContext(totalContext);
/*   const fetch = async () => {
    console.log("before user id : " + auth.userId);
    const resp = await axios.get(
      `http://localhost:5000/users/client/${auth.userId}`
    );

    console.log("after  " + auth.userId);
    setClient(resp.data.client);
    console.log(client);
    setReload(false);
  }; */
  useEffect(() => {
   
        if(auth.isLoggedIn ){ 
    setReload(true);
    axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL +`users/client/6282784d8250c9fca0fc1b20`,
     headers: { "Content-Type": "application/json" }, 
    }).then((resp) => {
      setClient(resp.data.client);
      console.log(client + "client babe");
      setReload(false);
    });
    console.log(client);
    console.log(auth.userId + "id front end");
    setReload(true);
}
    /* return
                 
            }else{return} */
  }, []);

  return (
    <div>
      <div className="persoInfo">
        <div className="titleBetweenLines">
          <div className="lineOne" style={{ width: " 4vw" }}>
            {" "}
          </div>
          <div className="middleTitle">Your Account</div>
          <div className="lineOne" style={{ width: " 4vw" }}>
            {" "}
          </div>
        </div>
        <div className="infoBloc">
          <img
            src="/images/welcome.png"
            alt="welcome"
            className="welcomingImage"
          />

          <div className="iTemInInfoBloc">
            <div className="labelDesc">First Name : </div>
            <div className="actualInfoValue">
              {" "}
              {client && client.prenom ? client.prenom : name.split(/[, ]+/)[0]}
            </div>
          </div>
          <div className="iTemInInfoBloc">
            <div className="labelDesc">Last Name : </div>
            <div className="actualInfoValue">
              {" "}
              {client && client.nom ? client.nom : name.split(/[, ]+/)[1]}
            </div>
          </div>
          <div className="iTemInInfoBloc">
            <div className="labelDesc">Email : </div>
            <div className="actualInfoValue">
              {" "}
              {client && client.email ? client.email : email}
            </div>
          </div>
          <div className="iTemInInfoBloc">
            <div className="labelDesc">Phone : </div>
            <div className="actualInfoValue">
              {" "}
              {client && client.phone ? client.phone : "Load phone number..."}
            </div>
          </div>
        </div>
      </div>
      <div className="totalOfOrder">
        <div className="passiveTotal">Total Order Price :</div>
        <div className="theTotalPrice">{price + 6}DT</div>
      </div>
    </div>
  );
}

export default PersoInfo;
