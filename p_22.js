// destruct an array

function locationString(location) {
  const [lat, lng] = location;
  return `The latitude is ${lat} and the longitude is ${lng}`;
}
const location = [24.235235, 2.5734];
console.log(locationString(location));
