// end the message with a period

function endMessage(message) {
  if (message.endsWith(".")) {
    return message
  } 
  return message + "."
}

console.log(endMessage("Hi there"))
console.log(endMessage("No thanks."))
console.log(endMessage("I can help"))



