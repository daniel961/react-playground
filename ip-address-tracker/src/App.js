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
    try {
      const { ip, location, isp } = await getIpInfo(ipAddress);
      setIpInfo({
        ip,
        location: `${location.country} ${location.city}`,
        timezone: location.timezone,
        isp,
      });
      setMapLocation([location.lat, location.lng]);
    } catch (err) {
      console.log(
        "Error: something went wrong - could not fetch data or update stats"
      );
    }
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
