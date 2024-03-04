const repeatString = function(string, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += string 
  }
  return num >= 0 ? result : 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
