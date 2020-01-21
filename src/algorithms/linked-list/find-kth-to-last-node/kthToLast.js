function kthToLast(linkedList, k) {
  if (!linkedList || !linkedList.head || k < 0) {
    return null;
  }

  if (k === 0) {
    return linkedList.tail;
  }

  let p1 = linkedList.head;
  let p2 = linkedList.head;

  // move p1 k nodes forward
  for (let i = 0; i < k; i += 1) {
    if (!p1) {
      return null;
    }

    p1 = p1.next;
  }

  // move p1 & p2 at the same pace until p1 is null
  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}

module.exports = kthToLast;
