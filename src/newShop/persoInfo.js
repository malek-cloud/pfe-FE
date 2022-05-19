import React from 'react'
import "./order.css"
import {useContext, useEffect, useState} from 'react'
import axios from "axios"
import {AuthContext} from '../context/loginContext'
import {totalContext} from '../context/cardContext'
import {useEmail, useName} from '../context/fcbGgle'
function PersoInfo() {
const [client, setClient] = useState()
const email = useEmail();
const name = useName();
      const auth = useContext(AuthContext);
      const price = useContext(totalContext);
useEffect( ()=>{
            if(auth.isLoggedIn){
                  const fetch = async ()=>{
                        console.log( "before user id : " + auth.userId)
                        const resp =  await   axios.get(`http://localhost:5000/users/client/${auth.userId}`)
                        console.log(resp)
                        console.log("after  "+auth.userId)
                        setClient(resp.data.client)
                  }
                  fetch()
            }
           
            },[])

  return (
    <div >
          <div className='persoInfo'>
          <div className="titleBetweenLines">
                <div className="lineOne" style={{width : " 4vw"}}> </div>
                <div className="middleTitle" >Votre Compte</div>
                <div className="lineOne" style={{width : " 4vw"}}> </div>
          </div>
          <div className="infoBloc">
          <img src="/images/welcome.png" alt="welcome" className='welcomingImage' />

                <div className="iTemInInfoBloc">
                      <div className="labelDesc">Prénom : </div>
                      <div className="actualInfoValue"> {client && client.prenom ? client.prenom  : name.split(/[, ]+/)[0]}</div>
                </div>
                <div className="iTemInInfoBloc">
                      <div className="labelDesc">Nom : </div>
                      <div className="actualInfoValue"> {client && client.nom ? client.nom  : name.split(/[, ]+/)[1]}</div>
                </div>
                <div className="iTemInInfoBloc">
                      <div className="labelDesc">Email : </div>
                      <div className="actualInfoValue">  {client && client.email ? client.email  : email}</div>
                </div>
                <div className="iTemInInfoBloc">
                      <div className="labelDesc">Téléphone : </div>
                      <div className="actualInfoValue"> {client && client.phone ? client.phone  : "Load phone number..."}</div>
                </div>
          </div>
    </div>
    <div className="totalOfOrder">
          <div className="passiveTotal">Totale de votre Commande :</div>
          <div className="theTotalPrice">{price + 6}DT</div>
    </div>
    </div>
  )
}

export default PersoInfo