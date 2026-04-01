/*
Set Matrix Zeroes
If an element is zero, set its entie row and column to zero.
Follow-up: solve in constant extra space using the matrix itself as markers.
*/


const setMatrixZeroes = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    //fill arrays with false
    const zeroRows = new Array(rows).fill(false);
    const zeroCols = new Array(cols).fill(false);

    // Step 1: find all positions with zero
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (matrix[row][col] === 0) {
                zeroRows[row] = true;  // mark this row
                zeroCols[col] = true;  // mark this col
            }
        }
    }

    // Step 2: set rows and cols to zero
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (zeroRows[row] || zeroCols[col]) {
                matrix[row][col] = 0;
            }
        }
    }

    return matrix;
};

console.log(setMatrixZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
]));
// [1, 0, 1]
// [0, 0, 0]
// [1, 0, 1]

