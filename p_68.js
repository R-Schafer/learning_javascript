// return an array of temperatures from an array of objects

const getTemperatures = (recordings) => {
  return recordings.map((recording) => {
    return recording.temperature;
  });
};

const recordings = [
  {
    date: "2020-01-03",
    temperature: 3,
  },
  {
    date: "2020-01-04",
    temperature: -4,
  },
];
console.log(getTemperatures(recordings));
