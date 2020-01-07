function binarySearch(
  sortedList = [],
  key,
  start = 0,
  end = sortedList.length - 1
) {
  if (!sortedList || !sortedList.length || end < start) {
    return -1;
  }

  const mid = Math.floor(start + (end - start + 1) / 2);

  if (key === sortedList[mid]) {
    return mid;
  } else if (key < sortedList[mid]) {
    return binarySearch(sortedList, key, start, mid - 1);
  } else {
    return binarySearch(sortedList, key, mid + 1, end);
  }
}

module.exports = binarySearch;
