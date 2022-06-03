import React from 'react'
import NavBar from "../elements/navBar";
import SignTemplate from '../sign/signTemplate';
import {useName} from '../context/fcbGgle'
import {useDeconnectionState, useDataContext} from '../context/loginContext'
import EndOrder from '../newShop/EndOrder';
function SignPage() {
const deconnect = useDeconnectionState();
const data = useDataContext();
  const name = useName();
  return (
    <div>
          <NavBar type="panier" />
          <div >
          {(!deconnect ||  JSON.parse(localStorage.getItem("userData")))  ||  name!=="" ? < EndOrder/> : <SignTemplate/>}
          </div>
    </div>
  )
}

export default SignPage