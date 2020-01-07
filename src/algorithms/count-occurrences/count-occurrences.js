function firstIndex(
  sortedList = [],
  key,
  start = 0,
  end = sortedList.length - 1
) {
  if (!sortedList || !sortedList.length || end < start) {
    return -1;
  }

  const middle = Math.floor(start + (end - start) / 2);

  if (
    (middle === 0 || key > sortedList[middle - 1]) &&
    key === sortedList[middle]
  ) {
    return middle;
  } else if (key > sortedList[middle]) {
    return firstIndex(sortedList, key, middle + 1, end);
  } else {
    return firstIndex(sortedList, key, start, middle - 1);
  }
}

function lastIndex(
  sortedList = [],
  key,
  start = 0,
  end = sortedList.length - 1
) {
  if (!sortedList || !sortedList.length || end < start) {
    return start;
  }

  const middle = Math.floor(start + (end - start) / 2);

  if (
    (middle === sortedList.length - 1 || key < sortedList[middle + 1]) &&
    key === sortedList[middle]
  ) {
    return middle;
  } else if (key < sortedList[middle]) {
    return lastIndex(sortedList, key, start, middle - 1);
  } else {
    return lastIndex(sortedList, key, middle + 1, end);
  }
}

function countOccurrences(sortedList = [], key) {
  const first = firstIndex(sortedList, key);
  const last = lastIndex(sortedList, key);

  if (first < 0) {
    return 0;
  }

  return last - first + 1;
}

module.exports = countOccurrences;
