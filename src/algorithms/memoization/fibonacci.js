// O(2^n)
function fibonacci(n = 0) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  // The two additive recursive calls here create a tree,
  // which expands exponentially, or 2^n nodes
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoizedFibonacci(n = 0, memo = {}) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  // if the cached value exists, return it
  if (memo[n] > 0) {
    return memo[n];
  }

  // cache our expensive computation...
  memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);

  return memo[n];
}

module.exports = {
  fibonacci,
  memoizedFibonacci
};
