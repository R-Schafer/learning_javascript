// .every() on array of onjects

const allGroupsPublic = (groups) => {
  return groups.every((group) => group.details.isPublic === true);
};

const sampleGroups = [
  {
    id: 1,
    title: "Football",
    details: {
      messageCount: 30,
      isPublic: true,
    },
  },
  {
    id: 2,
    title: "Family",
    details: {
      messageCount: 1014,
      isPublic: false,
    },
  },
];
console.log(allGroupsPublic(sampleGroups));
