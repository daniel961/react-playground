import config from "./config";

async function getIpInfo(ip) {
  const url = `${config.baseUrl}?apiKey=${config.apikey}&ipAddress=${ip}`;
  try {
    let ipInfo = await fetch(url);
    ipInfo = ipInfo.json();
    return ipInfo;
  } catch (err) {
    console.log("fetch error: ", err);
  }
}

export default getIpInfo;
