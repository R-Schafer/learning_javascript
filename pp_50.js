// setting flags 

function betweenMarkers(line, left, right){
  let word = ""
  let flag = false
  
  for(let i = 0; i < line.length; i++){
    if(line[i] === left){
      flag = true;
    } else if(line[i] === right){
      flag = false;
      break
    } else if(flag){
      word += line[i]
    }
  }
  return word
}

console.log(betweenMarkers('What is >apple<', '>', '<'));