function countNumberOfOccurrences(str) {
  const counts = {};

  for (let char of str) {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }

  return Object.entries(counts);
}
console.log(countNumberOfOccurrences("abracadabra"));