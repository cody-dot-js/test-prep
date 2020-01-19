function constructKey(word = "") {
  return [...word.toLowerCase().replace(/\s/g, "")].sort().join("");
}

function groupAnagrams(listOfStrings = []) {
  const anagramMap = listOfStrings.reduce((acc, word) => {
    const key = constructKey(word);

    acc[key] = (acc[key] || []).concat(word);

    return acc;
  }, {});

  return Object.values(anagramMap).reduce(
    (acc, words) => acc.concat(words),
    []
  );
}

module.exports = groupAnagrams;
