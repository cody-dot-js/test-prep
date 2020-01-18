function countPairs(list = [], k) {
  const lookup = list.reduce((acc, curr) => (acc[curr] = true), {});

  return list.reduce((acc, curr) => {
    const upperDiff = lookup[curr + k];
    const lowerDiff = lookup[curr - k];
    const hasUpperDiff = upperDiff !== undefined && upperDiff;
    const hasLowerDiff = lowerDiff !== undefined && lowerDiff;

    if (hasUpperDiff) {
      acc += 1;
    }

    if (hasLowerDiff) {
      acc += 1;
    }

    return acc;
  }, 0);
}

module.exports = countPairs;
