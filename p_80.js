// Complete the function addApp such that it immutably adds the app parameter to the apps array it receives.

const addApp = (apps, app) => {
  return [...apps, app];
};

const originalApps = ["Calculator", "Phone"];
console.log(addApp(originalApps, "Smart lights"));
console.log(originalApps);
