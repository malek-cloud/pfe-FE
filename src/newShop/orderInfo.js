import React, { useState, useRef } from "react";
import "./order.css";
import axios from "axios";
import { useContext } from "react";
import { totalContext, useCardItems } from "../context/cardContext";
function OrderInfo() {
  const price = useContext(totalContext);
  const achats = useCardItems();
  const region = useRef();
  const city = useRef();
  const adress = useRef();
  const [payUrl, setPayUrl] = useState("");
  const [card, setCard] = useState(false);
  const [load, setLoad] = useState(false);
  function payWithCard() {
    setCard(true);
  }
  const validate = async () => {
    setLoad(true);
    if (card) {
      console.log("card is true");
      const url = process.env.REACT_APP_BACKEND_URL + "pay";
      try {
        console.log("card is true 2");

        const resp = await axios.post(url, {
          amount: "200",
        });
        console.log("this is the result" + resp.data.link.link);
        setPayUrl(resp);
        console.log(payUrl + " pay url ?");
        const products = [];
        achats.map((e) => products.push(e._id));
        console.log(products.toString());

        const data = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "shop/createOrder",
          {
            userId: JSON.parse(localStorage.getItem("userData")).client._id,
            achats: products,
            amount: price + 6,
            paymentId: resp.data.link.payment_id,
            status: "paid",
            region: region.current.value,
            city: city.current.value,
            adress: adress.current.value,
          }
        );
        console.log("this is the result" + data.data);
         window.location.replace(resp.data.link.link);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    } else {
      const url = process.env.REACT_APP_BACKEND_URL + "shop/createOrder";
      try {
        console.log(
          JSON.parse(localStorage.getItem("userData")).client._id +
            " the client id"
        );

        const products = [];
        achats.map((e) => products.push(e._id));
        console.log(products.toString());

        const resp = await axios.post(url, {
          userId: JSON.parse(localStorage.getItem("userData")).client._id,
          achats: products,
          amount: price + 6,
          status: "not paid",
          region: region.current.value,
          city: city.current.value,
          adress: adress.current.value,
        });
        window.location.replace("http://localhost:3000/shop")
        console.log("this is the result" + resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    }
    setLoad(false);
  };
  return (
    <div className="orderInfo">
      <div className="titleBetweenLines">
        <div className="lineOne"></div>
        <div className="middleTitle">Validate the Order</div>
        <div className="lineOne"></div>
      </div>
      <div className="addressPart">
        <div className="adressTitle">Adress</div>
        <div className="sepVertLine"> </div>
        <div className="orderBlocAdresse">
          <div className="orderLabel">Region : </div>
          <input
            ref={region}
            type="text"
            placeholder="Bizerte / Sfax / Le Kef / Jendouba / Sousse / Tunis ...."
            className="inputRegion"
          />
          <div className="orderLabel">City : </div>
          <input
            ref={city}
            type="text"
            placeholder="Enter your current city ...."
            className="inputRegion"
          />
          <div className="orderLabel">Adress * : </div>
          <textarea
            ref={adress}
            className="textAreaAdress"
            name=""
            id=""
            cols="60"
            rows="4"
            placeholder="Road / Apartment / Building / Suite / Bloc ..."
          ></textarea>
        </div>
      </div>
      <div className="payPart">
        <div className="adressTitle" style={{ padding: "1vh 1.2vw" }}>
          Payment
        </div>
        <div className="sepVertLine" style={{ height: "12vh" }}>
          {" "}
        </div>
        <form className="paymentRadio">
          <div>
            <input
              type="radio"
              id="cash"
              name="pay"
              onClick={() => {
                setCard(false);
              }}
            />
            <label htmlFor="cash" className="radioLabel">
              {" "}
              Cash payment on delivery
            </label>
          </div>
          <div onClick={payWithCard}>
            <input type="radio" id="cart" name="pay" />
            <label htmlFor="cart" className="radioLabel">
              Payment With Credit Card Via Flouci Application
            </label>
          </div>
        </form>
      </div>
      {load ? (
        <div className="spinner-border text-dark" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="endOrder" onClick={validate}>
          Validate
        </div>
      )}
    </div>
  );
}

export default OrderInfo;
