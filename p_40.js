// adding an element to the object

const getLatLngElevation = (userLocation) => {
  const { lat, lng, elevation = 0 } = userLocation;

  return `The latitude is ${lat}, the longitude is ${lng} and the elevation is ${elevation} meters`;
};

const userLocation = {
  lat: 24.235235,
  lng: 2.5734,
};
console.log(getLatLngElevation(userLocation));
