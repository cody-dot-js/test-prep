function sieveOfEratosthenes(max = 0) {
  let flags = Array(max + 1).fill(true);
  flags[0] = false;
  flags[1] = false;

  let count = 0;
  let prime = 2;
  const N = Math.sqrt(max);

  while (prime <= N) {
    // cross off remaining multiples of prime
    crossOff(flags, prime);

    // find next value which is true
    prime = getNextPrime(flags, prime);
  }

  return flags.reduce((acc, curr, i) => {
    if (curr) {
      acc.push(i);
    }
    return acc;
  }, []);
}

function crossOff(flags = [false, false, true], prime = 2) {
  // cross off remaining multiples of prime
  // start with prime * prime because if we have a k * prime,
  // where k < prime, this value would have already been crossed off
  // in a prior iteration
  for (let i = prime * prime; i < flags.length; i += prime) {
    flags[i] = false;
  }
}

function getNextPrime(flags = [false, false, true], prime = 2) {
  let next = prime + 1;
  while (next < flags.length && !flags[next]) {
    next += 1;
  }

  return next;
}

module.exports = sieveOfEratosthenes;
