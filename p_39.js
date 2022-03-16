// deconstructing onject

const getLatLng = (userLocation) => {
  const { lat, lng } = userLocation;
  return `The latitude is ${lat} and the longitude is ${lng}`;
};

const userLocation = {
  lat: 24.235235,
  lng: 2.5734,
};
console.log(getLatLng(userLocation));
