import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
function Map(){
  return(
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{lat: 30.0444, lng: 31.2357}}
    />
  )
}
const wrappedMap = withScriptjs(withGoogleMap(Map));
export default wrappedMap;