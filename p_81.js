// Complete the enableDarkMode function such that it returns a clone of the config object it receives with the property darkTheme set to true.

const enableDarkTheme = (config) => {
  return { ...config, darkTheme: true };
};

const config = {
  darkTheme: false,
};
console.log(enableDarkTheme(config));
