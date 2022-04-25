import { Map,InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./location.css";
import React from "react";
export class MapContainer extends React.Component {
 
  render() {
    return (
      <Map
       google={this.props.google} 
       zoom={17}
       style = {{ width : "60vw" , height : "60vh" , position : "relative" , marginLeft : "5vw" }}
       initialCenter = {
        {
          lat : 36.812030,
        lng : 10.137520
        }
       }
       onClick={this.onMapClicked}
       onReady={this.fetchPlaces}
       onDragend={this.centerMoved}
       >
         <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        
      </Map>
    );
  }
}

MapContainer =  GoogleApiWrapper({
 
   apiKey: "AIzaSyDwmxmrq7uIjEZK9wIGPZpycIWhmbyOyn8", 
     language :"FR"

 
})(MapContainer);


