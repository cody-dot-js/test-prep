function sortedMerge(A = [], B = [], lastAIndex = 0) {
  let indexA = lastAIndex; // index of the last element in A
  let indexB = B.length - 1; // index of the last element in B
  let indexMerged = A.length - 1; // end of merged array

  // merge A and B, starting from the last element in each
  while (indexB >= 0) {
    if (indexA >= 0 && A[indexA] > B[indexB]) {
      A[indexMerged] = A[indexA];
      indexA -= 1;
    } else {
      A[indexMerged] = B[indexB];
      indexB -= 1;
    }

    indexMerged -= 1;
  }

  return A;
}

module.exports = sortedMerge;
