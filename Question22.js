/*
Merge Overlapping Intervals
Input: [[1,3],[2,6],[8,10]] → [[1,6],[8,10]]
*/

const mergeIntervals = (intervals) => {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
  ])
); // [[1,6], [8,10]]
console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
console.log(
  mergeIntervals([
    [1, 3],
    [5, 7],
    [2, 4],
  ])
); // [[1,4], [5,7]]
