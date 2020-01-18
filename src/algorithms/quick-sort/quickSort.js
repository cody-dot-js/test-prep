function swap(list, leftIndex, rightIndex) {
  const temp = list[leftIndex];
  list[leftIndex] = list[rightIndex];
  list[rightIndex] = temp;
}

function partition(list = [], { start = 0, end = list.length - 1 } = {}) {
  // choose middle for pivot, could be better if we choose a random pivot
  const pivotIndex = Math.floor(start + (end - start) / 2);
  const pivot = list[pivotIndex];
  let left = start;
  let right = end;

  while (left <= right) {
    // find element on the left that should be on the right
    while (list[left] < pivot) {
      left += 1;
    }

    // find element on the right that should be on the left
    while (list[right] > pivot) {
      right -= 1;
    }

    // swap the left & right, move the indices
    if (left <= right) {
      swap(list, left, right);
      left += 1;
      right -= 1;
    }
  }

  return left;
}

function quickSortRecurse(
  list = [],
  { start = 0, end = list.length - 1 } = {}
) {
  const index = partition(list, { start, end });

  if (start < index - 1) {
    // sort left half
    quickSortRecurse(list, { start, end: index - 1 });
  }

  if (index < end) {
    // sort right half
    quickSortRecurse(list, { start: index, end });
  }
}

function quickSort(list = []) {
  if (!list || !list.length) {
    return list;
  }

  const newList = list.slice();
  quickSortRecurse(newList);

  return newList;
}

function quickSortInPlace(list = []) {
  if (!list || !list.length) {
    return list;
  }

  quickSortRecurse(list);

  return list;
}

module.exports = {
  quickSort,
  quickSortInPlace
};
