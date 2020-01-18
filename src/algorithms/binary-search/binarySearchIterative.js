function binarySearch(sortedList = [], key) {
  let start = 0;
  let end = sortedList.length - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start + 1) / 2);

    if (sortedList[middle] < key) {
      start = middle + 1;
    } else if (sortedList[middle] > key) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

module.exports = binarySearch;
