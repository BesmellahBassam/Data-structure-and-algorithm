const evenBeforeOdd = (arr) => {
  let resultArr = [];
  let remained = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) resultArr.push(arr[i]);
    else remained.push(arr[i]);
  }
  return [...resultArr, ...remained];
};

module.exports = { evenBeforeOdd };
