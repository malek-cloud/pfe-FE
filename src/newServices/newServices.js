import "./newServices.css";
import { useState } from "react";
import Machine from "./machine"; 
function NewServices() {
  const [printing, setPrinting] = useState(true);
  const [laser, setLaser] = useState(false);
  const [manufacturing, setManufacturing] = useState(false);
  const [milling, setMilling] = useState(false);
 
  function printRing() {
    setPrinting(true);
    setLaser(false);
    setManufacturing(false);
   
    setMilling(false);
  }
  function laSer() {
    setPrinting(false);
    setLaser(true);
    setManufacturing(false);
   
    setMilling(false);
  }
  function manufacTuring() {
    setPrinting(false);
    setLaser(false);
    setManufacturing(true);
   
    setMilling(false);
  }
 
  function mIlling() {
    setPrinting(false);
    setLaser(false);
    setManufacturing(false);
   
    setMilling(true);
  }
  let image ="url('images/3d.jpg')";
  if(printing){
      image = "url('images/2.png')" ;

    }else if(laser){
      image = "url('images/1.png')" ;
  
    }
    else if (manufacturing){
      image = "url('images/3.png')" ;
  
    }
    else if (milling){
      image = "url('images/6.png')" ;
  
    }
    let description ="";
  if(printing){
      description = "Essentially, what all of the processes and technologies have inc ommon is the manner in which production is carried out layer by layer in an additive process which is in contrast to traditional methods of production involving subtractive methods or moulding casting processes" ;


    }else if(laser){
      description = " tags and call it a day. However, we can use some CSS to make the label look and behave fairly close to how an HTML button looks and behaves.Essentially, what all of the processes and technologies have inc" ;
  
    }
    else if (manufacturing){
      description = "However this will only apply the style when the mouse button is held down. The only way to apply a style and keep it applied onclick is to use a bit of JavaScript.Essentially, what all of " ;
  
    }
    else if (milling){
      description = "Styling the :active pseudoclass was not working for me until I applied !important. As I am using Bootstrap I suspect it may have been necessary to override one of their built-in button stylings. " ;
  
    }
    let title ="";
    if(printing){
      title = "3D Printing" ;
  
      }else if(laser){
            title = "Laser Cutting" ;
    
      }
      else if (manufacturing){
            title = "PCB Fabrication" ;
    
      }
      else if (milling){
            title = "CNC Routing" ;
    
      }
      let num ="";
      if(printing){
            num = "#01" ;
    
        }else if(laser){
            num = "#02" ;
      
        }
        else if (manufacturing){
            num = "#03" ;
      
        }
        else if (milling){
            num = "#04" ;
      
        }
    

  return (
    <div>
        {/*<div className="attract">COME & SEE</div>
        <a href="#newServicesContainer"> <img className="downArrow" src="/images/arrowDown.png" alt="" /></a>*/}
      <div
        id="newServicesContainer"
        style={{ backgroundImage: image, backgroundColor: "rgba(49, 3, 68)" }}
  >
        <div className="serviceDescription">
          <div className="seperateLine"></div>
          <div className="inlineElementsServiceTitle">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-caret-right-fill mb-2 mr-3"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <h2 className="serviceimage">{title}</h2>
          </div>
          <div className="serviceDescriptionParagraphe">
            <h1 className="serviceNumber">{num}</h1>
            
            <p className="serviceParagraphe">
            
              {description}
          

            </p>
          </div>
          <a href="#wrapInline" alt="" className="goForDetails">
            <div className="detailWord">Details</div>
            <div className="detailsIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-caret-right-fill  "
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </div>
          </a>
          <div className="seperateLine2"></div>
        </div>
        <div className="servicesList">
          <div
            className={printing ? "servicesButtonClicked" : "serviceButton"}
            onClick={printRing}
          >
                {printing ? <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-caret-right-fill ml-2 mb-1 mr-1  "
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg> : <div></div> }
            3D Printing
          </div>
          <div
            className={laser ? "servicesButtonClicked" : "serviceButton"}
            onClick={laSer}
          >
                {laser ? <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-caret-right-fill ml-2 mb-1 mr-1  "
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg> : <div></div> }
            Laser Cutting
          </div>
          <div
            className={
              manufacturing ? "servicesButtonClicked" : "serviceButton"
            }
            onClick={manufacTuring}
          >
                {manufacturing ? <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-caret-right-fill ml-2 mb-1 mr-1  "
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg> : <div></div> }
              PCB Fabrication
          </div>
          <div
            className={milling ? "servicesButtonClicked" : "serviceButton"}
            onClick={mIlling}
          >
                {milling ? <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-caret-right-fill ml-2 mb-1 mr-1  "
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg> : <div></div> }
            CNC Routing
          </div>
          
        </div>
      </div>
      
      <Machine service ={title}/>
     
    </div>
  );
}
export default NewServices;
