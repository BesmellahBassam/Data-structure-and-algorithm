

const printPrimeNumbers = (number) => {
  const primeArr = [];
  for (let index = 0; index < number; index++) {
    if (index % 2 !== 0) primeArr.push(index);
  }
  return primeArr;
};

console.log(printPrimeNumbers(10));
