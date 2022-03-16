// .find() on array of onjects

const getFamilyGroup = (groups) => {
  return groups.find((group) => group.title === "Family");
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
console.log(getFamilyGroup(sampleGroups));
