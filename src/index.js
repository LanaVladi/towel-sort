
// You should implement your task here.

  module.exports = function towelSort (matrix) {
if (arguments.length === 0) {
    return [];
}
if (matrix.length === 0) {
          return [];
}
let arr = [];
for (let i = 0; i < matrix.length; i++) {
for (let k = 0; k < matrix[i].length; k++) {
    arr.push((i % 2 === 0) ? k : [matrix[i].length - 1 - k]);
}
}
return arr;
};
