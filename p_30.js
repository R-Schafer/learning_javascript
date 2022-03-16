//finding value in object

function getCourseDetail(course, detail) {
  return `The course ${detail} is ${course[detail]}`;
}

console.log(
  getCourseDetail({ id: 1, name: "Learn JavaScript", year: 2021 }, "name")
);
console.log(
  getCourseDetail({ id: 1, name: "Learn JavaScript", year: 2021 }, "year")
);
