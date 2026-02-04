/*
Top K Frequent Elements
Input: [1,1,1,2,2,3], k=2 → [1,2]
*/

const frequentOccuringElements = (array, k) => {
  const freqMap = {};
  for (const element of array) {
    freqMap[element] = freqMap[element] + 1 || 1;
  }
  const sorted = Object.keys(freqMap)
    .map((key) => [key, freqMap[key]])
    .sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((pair) => pair[0]);
};

// console.log(frequentOccuringElements([1, 1, 1, 2, 2, 3], 2));
