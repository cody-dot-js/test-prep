function gcd(a, b) {
  if (!a) {
    return b;
  }
  return gcd(b % a, a);
}

function generalizeGcd(list = []) {
  if (!list || !list.length) {
    return 0;
  }

  let result = list[0];
  list.forEach(number => {
    result = gcd(number, result);

    if (result === 1) {
      return 1;
    }
  });

  return result;
}

module.exports = generalizeGcd;
