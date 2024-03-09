const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return add(a, -b);
};

const sum = function(arr) {
  let res = 0;
  for (let element of arr) {
    res = add(res, element);
  }
	return res;
};

const multiply = function(arr) {
  let sum = 1;
  for (let element of arr) {
    sum *= element;
  }
  return sum;
};

const power = function(base, pow) {
	return Math.pow(base, pow);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
