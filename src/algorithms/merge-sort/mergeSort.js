function merge(
  list = [],
  buffer = [],
  { start = 0, middle, end = list.length - 1 } = {}
) {
  // copy both halves into the buffer array
  for (let i = start; i <= end; i += 1) {
    buffer[i] = list[i];
  }

  let bufferStart = start;
  let bufferEnd = middle + 1;
  let current = start;

  // Iterate through the buffer array. Compare the left and right half, copying back
  // the smaller element from the two halves into the original list
  while (bufferStart <= middle && bufferEnd <= end) {
    if (buffer[bufferStart] <= buffer[bufferEnd]) {
      list[current] = buffer[bufferStart];
      bufferStart += 1;
    } else {
      // if right element is smaller than the left element
      list[current] = buffer[bufferEnd];
      bufferEnd += 1;
    }

    current += 1;
  }

  // copy the rest of the left side of the buffer array into the target list array
  const remaining = middle - bufferStart;
  for (let i = 0; i <= remaining; i += 1) {
    list[current + i] = buffer[bufferStart + i];
  }
}

function mergeSortRecurse(
  list = [],
  buffer = [],
  { start = 0, end = list.length - 1 } = {}
) {
  if (start < end) {
    const middle = Math.floor(start + (end - start) / 2);

    mergeSortRecurse(list, buffer, { start, end: middle }); // sort left half
    mergeSortRecurse(list, buffer, { start: middle + 1, end }); // sort right half
    merge(list, buffer, { start, middle, end }); // merge them
  }
}

function mergeSortInPlace(list = []) {
  if (!list || !list.length) {
    return list;
  }

  let buffer = Array(list.length);
  mergeSortRecurse(list, buffer);

  return list;
}

function mergeSort(list = []) {
  if (!list || !list.length) {
    return list;
  }

  let buffer = Array(list.length);
  let newList = list.slice();

  mergeSortRecurse(newList, buffer);

  return newList;
}

module.exports = { mergeSort, mergeSortInPlace };
