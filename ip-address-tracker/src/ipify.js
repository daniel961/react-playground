import config from "./config";

function getIpInfo(ip) {
  return {
    ip: "85.64.206.150",
    location: {
      country: "IL",
      region: "Tel Aviv District",
      city: "Tel Aviv",
      lat: 32.08088,
      lng: 34.78057,
      postalCode: "",
      timezone: "+03:00",
      geonameId: 293397,
    },
    domains: ["85.64.206.150.dynamic.barak-online.net"],
    as: {
      asn: 1680,
      name: "Cellcom LTD",
      route: "85.64.0.0/16",
      domain: "https://www.cellcom.co.il/",
      type: "Cable/DSL/ISP",
    },
    isp: "013 Netvision",
  };
}

export default getIpInfo;
