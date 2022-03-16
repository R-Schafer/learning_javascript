// using .reduce() on an array of objects - adding

const sumMessageCount = (groups) => {
  return groups.reduce((total, current) => {
    return total + current.details.messageCount;
  }, 0);
};

const sampleGroups = [
  {
    id: 1,
    title: "Football",
    details: {
      messageCount: 30,
      public: true,
    },
  },
  {
    id: 2,
    title: "Family",
    details: {
      messageCount: 1014,
      public: false,
    },
  },
];
console.log(sumMessageCount(sampleGroups));
