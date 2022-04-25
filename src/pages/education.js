import React from 'react'
import HeaderCarousel from '../homeElements/headerCarousel'
import Footer from "../elements/footer";
import Stomach from "../educationv2/stomach"
function Education() {
  return (
    <div style={{backgroundColor:"#f3f3f3"}}>
          <HeaderCarousel type={"learn"}/>
         <Stomach/>
          <Footer/>
    </div>
  )
}

export default Education