function sum(n = 0) {
  if (n < 0) {
    return NaN;
  }

  return (n * (n + 1)) / 2;
}

module.exports = sum;
