// Function declaration
function calculateRectangleAreaFD(width, height) {
  return width * height;
}

// Function expression
// eslint-disable-next-line func-names
const calculateRectangleAreaFE = function (width, height) {
  return width * height;
};

// Arrow function
const calculateRectangleAreaAF = (width, height) => width * height;

console.log(calculateRectangleAreaFD(5, 10));
console.log(calculateRectangleAreaFE(5, 10));
console.log(calculateRectangleAreaAF(5, 10));
