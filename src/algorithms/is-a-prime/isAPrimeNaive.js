function isAPrimeNaive(num = 0) {
  if (num < 2) {
    return false;
  }

  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAPrimeNaive;
