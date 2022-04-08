let inputField = document.getElementById("ipInput");
let searchBtn = document.getElementById("searchBtn");
// let ipOutput = document.getElementById("ipOutput")
let map = L.map("map").setView([-33.05098, -61.15375], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidXNraTQ0IiwiYSI6ImNsMHVtcDE5eDB3NWczY241dWg3YTBzMW0ifQ.b-uJRzzXkFjXbPtUUWT73A",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "your.mapbox.access.token",
  }
).addTo(map);

const getData = async (api) => {
  const res = await fetch(api);
  return await res.json();
};

function insert(lat, lng, locat) {
  map = L.map("map").setView([lat, lng], 13);
}

const addPopup = async () => {
  let ipValue = inputField.value;
  const api_url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_L3EOGvrodLaFgcAgfedk1YfqGHdqP&ipAddress=${ipValue}`;
  const data = await getData(api_url);
  let location = data.location;
  info = {
    lat: location.lat,
    lng: location.lng,
  };
  map.setView([info.lat, info.lng], 13);
  document.getElementById("ipOutput").innerHTML = data.ip;
  document.getElementById("locatOutput").innerHTML =
    location.city + ", " + location.region;
  document.getElementById("timeOutput").innerHTML = location.timezone;
  document.getElementById("ISP").innerHTML = data.isp;

  L.marker([info.lat, info.lng]).addTo(map);
};
