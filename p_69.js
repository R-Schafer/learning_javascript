// .filter() on array of onjects

const getBigGroups = (groups) => {
  return groups.filter((group) => group.details.messageCount > 100);
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
console.log(getBigGroups(sampleGroups));
