
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) {
    return [];
  }
  else {
    let result = matrix.map((item, index) => index % 2 == 1 ? item.reverse() : item);
    return result.flat(1);
  }
}
