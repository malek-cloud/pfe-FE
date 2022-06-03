import React, { useEffect } from "react";
import "./order.css";
import { useContext, useState } from "react";
import { totalContext } from "../context/cardContext";
import { useDataContext } from "../context/loginContext";
import { useEmail, useName } from "../context/fcbGgle";
function PersoInfo() {
  const [dataValues, setDataValues] = useState();
  const dataconnect = useDataContext();
  useEffect(() => {
    setDataValues(JSON.parse(localStorage.getItem("userData")));
  }, []);
  const email = useEmail();
  const name = useName();
  const data = useDataContext();
  const price = useContext(totalContext);
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
              {dataValues ? dataValues.client.prenom : name.split(/[, ]+/)[0]}
            </div>
          </div>
          <div className="iTemInInfoBloc">
            <div className="labelDesc">Last Name : </div>
            <div className="actualInfoValue">
              {" "}
              {dataValues ? dataValues.client.nom : name.split(/[, ]+/)[1]}
            </div>
          </div>
          <div className="iTemInInfoBloc">
            <div className="labelDesc">Email : </div>
            <div className="actualInfoValue">
              {" "}
              {dataValues ? dataValues.client.email : email}
            </div>
          </div>
          <div className="iTemInInfoBloc">
            <div className="labelDesc">Phone : </div>
            <div className="actualInfoValue">
              {" "}
              {dataValues ? dataValues.client.phone : "Load phone number..."}
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
