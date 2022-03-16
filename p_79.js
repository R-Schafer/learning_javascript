// cloning an array

const cloneApps = (apps) => {
  return [...apps];
};

const originalApps = ["Calculator", "Phone"];
const copiedApps = cloneApps(originalApps);
console.log(copiedApps);
