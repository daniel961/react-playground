import { useState } from "react";
import GlobalStyle from "./components/styled/Global";
import Header from "./components/Header";
import DetailsPanel from "./components/DetailsPanel";
import Map from "./components/Map";

function App() {
  const [mapLocation, setMapLocation] = useState([31.771959, 35.217018]);

  const fetchIpLocation = async function (ip) {
    // fetch ip location
    // parse response
    // set map location
    // set ip details on panel
    setMapLocation([32.771959, 35.217018]);
  };

  return (
    <>
      <GlobalStyle />
      <DetailsPanel></DetailsPanel>
      <Header fetchIpLocation={fetchIpLocation}></Header>
      <Map position={mapLocation}></Map>
    </>
  );
}

export default App;
