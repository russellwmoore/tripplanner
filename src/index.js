const mapboxgl = require('mapbox-gl');
const makeMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1Ijoicnlob25leWRldyIsImEiOiJjam1pNzNoYm0wMXhuM2twbXB5Y3duZTVyIn0.kASGUjMIBN000nuyUGh7sw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const please = makeMarker('Activity', [-74.009, 40.705]);

please.addTo(map);
// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

module.exports = map;
