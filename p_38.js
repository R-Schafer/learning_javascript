// merging 2 objects

function mergeObjects(defaultOptions, options) {
  return { ...defaultOptions, ...options };
}

const defaultOptions = {
  indentation: "tab",
  tabSize: 2,
  language: "javascript",
};

const options = {
  tabSize: 4,
};

console.log(mergeObjects(defaultOptions, options));
