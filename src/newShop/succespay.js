import React, {useEffect} from 'react'
import "./payement.css"
function Succespay() {
      useEffect(()=>{
            setTimeout(() => {
                  window.location.replace(process.env.REACT_APP_BACKEND_URL2 +"shop")
            }, 4000);
      },[])
  return (
    <div>
          <div className="succes">Succès</div>
          <div className="explication">Votre commande a été bien passer</div>
          <div className="explication">Le prix a été soustrait de votre solde</div>
          <div className="thanks">Maker skills Up <br/> vous remercie pour votre confiance</div>

    </div>
  )
}

export default Succespay