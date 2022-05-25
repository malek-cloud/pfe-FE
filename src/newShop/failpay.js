import React, {useEffect} from 'react'
import "./payement.css"
function Failpay() {
      useEffect(()=>{
            setTimeout(() => {
                  window.location.replace(process.env.REACT_APP_BACKEND_URL2 +"panier")
            }, 4000);
      },[])
  return (
      <div>
          <div className="fail">Échec</div>
          <div className="echecIcon">⛔</div>
          <div className="explicationfail">Il y a une erreur de paiement !</div>
          <div className="explicationfail">Vous devez saisir des coordonnés bancaires valides svp</div>
          <div className="explicationfail">Votre commande n'a pas été bien passée</div>
          

    </div>
  )
}

export default Failpay