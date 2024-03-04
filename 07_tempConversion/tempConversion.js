const convertToCelsius = function(tempInFarenheit) {
  const tempInCelsius = (tempInFarenheit - 32) * (5 / 9);
  return Math.round(tempInCelsius * 10) / 10;
};

const convertToFahrenheit = function(tempInCelsius) {
  const tempInFarenheit = tempInCelsius * (9 / 5) + 32;
  return Math.round(tempInFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
