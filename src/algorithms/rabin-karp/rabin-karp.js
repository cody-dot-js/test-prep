const d = 256;

// O(M + N), where M < N, worst case O(MN), where O(N^2) if M === N
function search(text = "", pattern = "", q = 65537) {
  if (!text && pattern) {
    return -1;
  }

  const M = pattern.length;
  const N = text.length;

  let pattern_hash = 0; // hash value for pattern
  let text_hash = 0; // hash value for text
  let hash = 1;
  let i = 0;

  for (i = 0; i < M - 1; ++i) {
    hash = (hash * d) % q;
  }

  // calc the hash value of the pattern and first window of text
  for (i = 0; i < M; ++i) {
    pattern_hash = (d * pattern_hash + pattern.charCodeAt(i)) % q;
    text_hash = (d * text_hash + text.charCodeAt(i)) % q;
  }

  // slide the pattern over the text one by one
  for (i = 0; i <= N - M; ++i) {
    /**
     * Check the hash values of the current window of text and pattern.
     * If the hash values match, then only check for chars one by one
     */
    if (pattern_hash === text_hash) {
      let j = 0;

      // check for equality of chars one by one
      for (j = 0; j < M; ++j) {
        if (text.charAt(i + j) !== pattern.charAt(j)) {
          break;
        }
      }

      // if pattern_hash=== t && pattern[0...M-1] === text[i, i+1, ...i + M - 1]
      if (j === M) {
        return i;
      }
    }

    // Calc the hash value for next window of text:
    // remove leading digit, add trailing digit
    if (i < N - M) {
      text_hash =
        (d * (text_hash - text.charCodeAt(i) * hash) + text.charCodeAt(i + M)) %
        q;

      // we might get a negative value of text_hash, convert it to positive
      if (text_hash < 0) {
        text_hash = text_hash + q;
      }
    }
  }

  return -1;
}

module.exports = search;
