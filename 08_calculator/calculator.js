const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(args) {
	return args.reduce((sum, a) => sum + a, 0);
};

const multiply = function(args) {
  return args.reduce((result, a) => result * a, 1);
};

const power = function(num, pow) {
  return Math.pow(num, pow);
};

const factorial = function(num) {
  if (num === 0 || num ===1) return 1;

  let result = num;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
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
