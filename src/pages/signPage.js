import React from 'react'
import NavBar from "../elements/navBar";
import SignTemplate from '../sign/signTemplate';
import {useContext} from "react"
import {AuthContext} from '../context/loginContext'
import {useName} from '../context/fcbGgle'
import EndOrder from '../newShop/EndOrder';
function SignPage() {
  const name = useName();
const auth = useContext(AuthContext)
  return (
    <div>
          <NavBar type="panier" />
          <div >
          {auth.isLoggedIn || name!=="" ? <EndOrder/> : <SignTemplate/>}
          </div>
    </div>
  )
}

export default SignPage