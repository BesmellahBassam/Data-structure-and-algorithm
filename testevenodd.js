const assertDeepEqual = (actual, expected, message) => {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) {
    throw new Error(`${message}\nExpected: ${e}\nActual:   ${a}`);
  }
};

const runTests = () => {
  // Examples
  assertDeepEqual(evenBeforeOdd([1, 2, 3, 4]), [2, 4, 1, 3], "moves evens first, odds second");

  assertDeepEqual(evenBeforeOdd([2, 4, 6]), [2, 4, 6], "all evens stays same");

  // More cases
  assertDeepEqual(evenBeforeOdd([1, 3, 5]), [1, 3, 5], "all odds stays same");

  assertDeepEqual(evenBeforeOdd([]), [], "empty array");

  assertDeepEqual(evenBeforeOdd([0, 1, 2, 3]), [0, 2, 1, 3], "includes zero (even)");

  assertDeepEqual(evenBeforeOdd([-3, -2, -1, 0, 1, 2]), [-2, 0, 2, -3, -1, 1], "handles negatives and zero");

  // Stability check: order preserved within evens and within odds
  assertDeepEqual(evenBeforeOdd([8, 2, 7, 5, 4, 3]), [8, 2, 4, 7, 5, 3], "preserves original order within groups");

  console.log("All tests passed.");
};

runTests();
