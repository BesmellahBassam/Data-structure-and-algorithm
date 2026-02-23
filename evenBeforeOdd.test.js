const { evenBeforeOdd } = require("./evenBeforeOdd");

describe("evenBeforeOdd", () => {
  test("moves evens first then odds (example)", () => {
    expect(evenBeforeOdd([1, 2, 3, 4])).toEqual([2, 4, 1, 3]);
  });

  test("all evens remains the same", () => {
    expect(evenBeforeOdd([2, 4, 6])).toEqual([2, 4, 6]);
  });

  test("all odds remains the same", () => {
    expect(evenBeforeOdd([1, 3, 5])).toEqual([1, 3, 5]);
  });

  test("empty array", () => {
    expect(evenBeforeOdd([])).toEqual([]);
  });

  test("handles zero and negatives", () => {
    expect(evenBeforeOdd([-3, -2, -1, 0, 1, 2])).toEqual([-2, 0, 2, -3, -1, 1]);
  });

  test("preserves relative order within evens and within odds", () => {
    expect(evenBeforeOdd([8, 2, 7, 5, 4, 3])).toEqual([8, 2, 4, 7, 5, 3]);
  });

  test("does not mutate input array", () => {
    const input = [1, 2, 3, 4];
    const copy = [...input];
    evenBeforeOdd(input);
    expect(input).toEqual(copy);
  });
});
