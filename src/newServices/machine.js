import React from 'react'
import MachineCarousel from './machineCarousel'
import MachineTitle from './machineTitle'
import MachineGallery from "./machineGallery"
import "./machine.css"
function Machine(props) {
  return (
    <div><div id='wrapInline'>
          <MachineTitle/>
          <MachineCarousel service={props.service}/></div>
          <MachineGallery/></div>
  )
}

export default Machine