import { useState } from "react";
import GlobalStyle from "./components/styled/Global";
import Header from "./components/Header";
import DetailsPanel from "./components/DetailsPanel";
import Map from "./components/Map";
import getIpInfo from "./ipify";

function App() {
  const [mapLocation, setMapLocation] = useState([31.771959, 35.217018]);
  const [ipInfo, setIpInfo] = useState({});

  const fetchIpLocation = async function (ipAddress) {
    // fetch ip location
    const { ip, location, isp } = getIpInfo();
    console.log(ip, location, isp);
    // parse response
    // set map location
    // set ip details on panel
    setIpInfo({
      ip,
      location: `${location.country} ${location.city}`,
      timezone: location.timezone,
      isp,
    });
    setMapLocation([location.lat, location.lng]);
  };

  return (
    <>
      <GlobalStyle />
      <DetailsPanel ipInfo={ipInfo}></DetailsPanel>
      <Header fetchIpLocation={fetchIpLocation}></Header>
      <Map position={mapLocation}></Map>
    </>
  );
}

export default App;
