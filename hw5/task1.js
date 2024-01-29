// Function declaration
function rectangleAreaFD(width, height) {
    return width * height;
}

// Function expression
const rectangleAreaFE = function (width, height) {
    return width * height;
};

// Arrow function
const rectangleAreaAF = (width, height) => width * height;

console.log(rectangleAreaFD(5, 10));
console.log(rectangleAreaFE(5, 10));
console.log(rectangleAreaAF(5, 10));
