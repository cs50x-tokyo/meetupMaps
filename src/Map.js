import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { useState } from "react";
function GoogleMap(props) {
  const [marks] = useState([
    { latitude: 47.359423, longitude: -122.021071 },
    { latitude: 47.2052192687988, longitude: -121.988426208496 },
    { latitude: 47.6307081, longitude: -122.1434325 },
    { latitude: 47.3084488, longitude: -122.2140121 },
    { latitude: 47.5524695, longitude: -122.0425407 }
  ]);
  const mapStyles = {
    width: "100%",
    height: "100%"
  };
  const putMarks = () => {
    return marks.map((mark, index) => {
      return (
        <Marker
          key={index}
          position={{
            lat: mark.latitude,
            lng: mark.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };
  return (
    <div className="Map">
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        {putMarks()}
      </Map>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "Your API KEY here"
})(GoogleMap);
