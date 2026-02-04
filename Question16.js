/*
 Matrix Multilicatin
Descriptin: Multily matrix A × B manually.
Example:
[[1,2],[3,4]] × [[5,6],[7,8]] → [[19,22],[43,50]]
*/
const matrixMultiplication = (A, B) => {
  const aRows = A.length;
  const aCols = A[0].length;
  const bRows = B.length;
  const bCols = B[0].length;

  if (aCols !== bRows) {
    console.log("invalid conditions");
  }

  const result = Array(aRows)
    .fill()
    .map(() => Array(bCols).fill(0));
  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bCols; j++) {
      let sum = 0;
      for (let k = 0; k < aCols; k++) {
        sum += A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
};

console.log(
  matrixMultiplication(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  )
);
