//array concatenation

function getApps(apps1, apps2) {
  const newArray = [...apps1, ...apps2];
  return newArray;
}

console.log(getApps(["Calculator", "Whatsapp"], ["Chrome", "Firefox"]));
