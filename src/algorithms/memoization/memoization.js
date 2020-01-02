const { fibonacci, memoizedFibonacci } = require("./fibonacci");

// fib(1) => 2^1 steps
// fib(2) => 2^2 steps
// fib(3) => 2^3 steps
// ...
// fib(n) => 2^n steps
// so, Σi=1..n 2^k = O(2^(n + 1)), which is still O(2^n)
// => O(2^n)
function allFibonacci(n = 0) {
  if (n <= 0) {
    return [0];
  }

  return [...new Array(n + 1)].map((_, i) => fibonacci(i));
}

// at each call to memoizeFibonacci(i), we have already computed and stored the
// values for fib(i - 1) and fib(i - 2). So, we just need to lookup those values
// in the cache (constant time O(1) 😉) instead of recursing to calculate it
// again!
// A constant amount of work is done N times, so it's O(n) (at the expense of
// O(n) extra space)!
// => O(n), wow! Down from O(2^n) 😳🤯
function memoizedAllFibonacci(n = 0) {
  if (n <= 0) {
    return [0];
  }

  let cache = {};
  return [...new Array(n + 1)].map((_, i) => memoizedFibonacci(i, cache));
}

module.exports = {
  allFibonacci,
  memoizedAllFibonacci
};
