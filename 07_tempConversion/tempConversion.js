const convertToCelsius = function(num) {
    return Math.round((num - 32) * (5/9) * 1e1) / 1e1; 
};

const convertToFahrenheit = function(num) {
  return Math.round((num * (9/5) + 32) * 1e1 ) / 1e1;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
