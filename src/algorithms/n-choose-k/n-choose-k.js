function chooseIterative(n = 0, k = 0) {
  if (k < 0 || n < 0) {
    return NaN;
  }

  if (k === 0 || k == n) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= k; ++i) {
    const intermediate = (n + 1 - i) / i;
    result *= intermediate;
  }

  return result;
}

function chooseRecursive(n = 0, k = 0) {
  if (k < 0 || n < 0) {
    return NaN;
  }

  if (k === 0 || k == n) {
    return 1;
  }

  return (n * chooseRecursive(n - 1, k - 1)) / k;
}

module.exports = {
  chooseIterative,
  chooseRecursive
};
