const removeFromArray = function(arr, ...elementsToRemove) {
  return arr.filter(x => elementsToRemove.includes(x) === false);
};

// Do not edit below this line
module.exports = removeFromArray;
