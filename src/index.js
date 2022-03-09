
// You should implement your task here.

  module.exports = function towelSort (matrix) {
// const matrix = [
//         [ 1, 2, 3 ],
//         [ 4, 5, 6 ],
//         [ 7, 8, 9 ],
//        ];
if (arguments.length === 0) {
    return [];
}

if (matrix.length === 0) {
          return [];
}
let arr = [];
for (let i = 0; i < matrix.length; i++) {
for (let k = 0; k < matrix[i].length; k++) {
   arr.push((i % 2 === 0) ? matrix[i][k] : matrix[i][matrix[i].length - 1 - k])
}
 // console.log(arr);
}
return arr;
};
