// refactoring if conditions

const getStatus = (host, user, booking) => {
  const message = {
    pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
    confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
    canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
    done: `${host} hopes you had a great stay.`,
  };
  return message[booking.status] ?? "Unknown booking status.";
};

const booking1 = {
  status: "pending",
};
console.log(getStatus("Sam", "Alex", booking1));

const booking2 = {
  status: "confirmed",
};
console.log(getStatus("Charlie", "Blake", booking2));
