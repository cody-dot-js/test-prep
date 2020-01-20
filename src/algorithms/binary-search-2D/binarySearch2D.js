function binarySearch2D(
  matrix = [[]], // row-major order
  key,
  numCols = matrix[0].length,
  numRows = matrix.length
) {
  let start = 0;
  let end = numCols * numRows - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    const R = Math.floor(middle / numCols);
    const C = middle % numCols;
    const value = matrix[R][C];

    if (value < key) {
      start = middle + 1;
    } else if (value > key) {
      end = middle - 1;
    } else {
      return { row: R, column: C, index: middle };
    }
  }

  return { row: -1, column: -1, index: -1 };
}

module.exports = binarySearch2D;
