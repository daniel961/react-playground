/* eslint-disable */
import React, { useRef, useState } from "react";
import { Map, TileLayer, LayersControl, Marker } from "react-leaflet";
import markerIcon from "./images/icon-location.svg";
import "leaflet/dist/leaflet.css";
import "./leaflet2.css";
import L from "leaflet";

const iconPerson = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: null,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(50, 80),
  className: "leaflet-div-icon",
});

const MapInfo = (props) => {
  const mapRef = useRef();

  const [bounds, setbounds] = useState([
    [-900, -300],
    [900, 300],
  ]);

  return (
    <>
      <Map
        ref={mapRef}
        center={props.position}
        zoom={50}
        maxZoom={19}
        minZoom={2}
        bounceAtZoomLimits={true}
        maxBoundsViscosity={0.95}
        maxBounds={bounds}
      >
        <Marker position={props.position} icon={iconPerson}></Marker>
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreet">
            <TileLayer
              noWrap={false}
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              noWrap={false}
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Dark">
            <TileLayer
              noWrap={false}
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </Map>
    </>
  );
};

export default MapInfo;
