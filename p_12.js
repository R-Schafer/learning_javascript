// putting dashes between words, can't be longer than 15, all lowercase

function getSlug(message) {
  return message.substring(0, 15).replaceAll(" ", "-").toLowerCase();
}

console.log(getSlug("IKEA table"));
console.log(getSlug("200cm Bed"));
console.log(getSlug("Bedside lavalamp"));
console.log(getSlug("A B C noodles"));
