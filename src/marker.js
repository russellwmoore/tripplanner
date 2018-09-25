// called with `new` keyword.
const map = require('./index');
const mapboxgl = require('mapbox-gl');

function makeMarker(kind, coordinates) {
  let site;
  if (kind === 'Activity') {
    site = 'http://i.imgur.com/WbMOfMl.png';
  } else if (kind === 'Restaurant') {
    site = 'http://i.imgur.com/cqR6pUI.png';
  } else if (kind === 'Hotel') {
    site = 'http://i.imgur.com/D9574Cu.png';
  }
  const markerDomEl = document.createElement('div');

  markerDomEl.style.backgroundImage = `url(${site})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = makeMarker;

// const markerDomEl = document.createElement('div'); // Create a new, detached DIV
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
