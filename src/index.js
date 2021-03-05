
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix == "undefined" || matrix.length == 0) {
        return [];
    }
    for (let i = 1; i < matrix.length + 1; i++) {
        if (i % 2 == 0) {
            console.log(matrix[i - 1]);
            matrix[i - 1].sort((a, b) => a - b).reverse();
        } else if (i % 2 != 0) {
            matrix[i - 1].sort((a, b) => a - b);
        }
    }
    let mergedMatrix = [].concat.apply([], matrix);
    return mergedMatrix;
}
