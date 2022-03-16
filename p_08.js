// see if year is listed in the array

function getYear(years, searchYear) {
  for (let i = 0; i < years.length; i++) {
    if (years[i] === searchYear) {
      return true;
    }
  }
  return false;
}

console.log(getYear([2020, 2021, 2022], 2019));
console.log(getYear([2020, 2021, 2022], 2021));
