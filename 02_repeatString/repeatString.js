const repeatString = function(words, num){
  let string = "";
  if(num < 0) return "ERROR";
  for(i = 0; i < num; i++){
    string +=words;
  }
  return string;
}


// Do not edit below this line
module.exports = repeatString;
