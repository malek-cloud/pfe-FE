import React from 'react'
import "./order.css"

function PersoInfo() {
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
                      <div className="actualInfoValue"> Haythem</div>
                </div>
                <div className="iTemInInfoBloc">
                      <div className="labelDesc">Nom : </div>
                      <div className="actualInfoValue"> Daboussi</div>
                </div>
                <div className="iTemInInfoBloc">
                      <div className="labelDesc">Email : </div>
                      <div className="actualInfoValue"> Haythem@test.com</div>
                </div>
                <div className="iTemInInfoBloc">
                      <div className="labelDesc">Téléphone : </div>
                      <div className="actualInfoValue"> 23568956</div>
                </div>
          </div>
    </div>
    <div className="totalOfOrder">
          <div className="passiveTotal">Totale de votre Commande :</div>
          <div className="theTotalPrice">56DT</div>
    </div>
    </div>
  )
}

export default PersoInfo