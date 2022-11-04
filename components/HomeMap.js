import React, { useState, useEffect } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "../components/mapStyle";

const HomeMap = (props) => {
  return (
    <MapView
      style={{ width: "100%", height: "100%" }}
      provider={PROVIDER_GOOGLE}
      customMapStyle={mapStyle}
      showsUserLocation={true}
      followsUserLocation={true}
      initialRegion={{
        // latitude: -1.286389,
        // longitude: 36.817223,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
      }}>

    </MapView>
  );
};

export default HomeMap;
