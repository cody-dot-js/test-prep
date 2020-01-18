function countSimilarities(lhsSorted = [], rhsSorted = []) {
  let i = 0,
    j = 0;
  let count = 0;

  while (i < lhsSorted.length && j < rhsSorted.length) {
    const left = lhsSorted[i];
    const right = rhsSorted[j];

    if (left === right) {
      count += 1;
      i += 1;
      j += 1;
    } else if (left < right) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return count;
}

module.exports = countSimilarities;
