import React from 'react'
import NavBar from "../elements/navBar";
import SignTemplate from '../sign/signTemplate';
import {useContext} from "react"
import {AuthContext} from '../context/loginContext'
import EndOrder from '../newShop/EndOrder';
function SignPage() {
const auth = useContext(AuthContext)
  return (
    <div>
          <NavBar type="panier" />
          <div >
          {auth.isLoggedIn ? <EndOrder/> : <SignTemplate/>}
          </div>
    </div>
  )
}

export default SignPage