const removeFromArray = function(...arr) {
  const array = arr[0];
  const newArray = [];
  array.forEach((item) => {
    if(!arr.includes(item)){
      newArray.push(item)
    }
    
  });
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
