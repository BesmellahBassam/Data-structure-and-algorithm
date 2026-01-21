/*
--- Directions
   Given prinipal (P), rate (R as percent), and time (T in years),
   return both simple interest and compound interest.
   Simple Interest = (P * R * T) / 100
   Compound Interest = P * ((1 + R/100) ^ T - 1)
--- Examples
   computeInterest(1000, 5, 2) ->
     { simpleInterest: 100, compoundInterest: 102.5 }
*/

const calculateInterest = (principle, rate, time) => {
  const simpleInter = (1 * rate * time) / 100;
  let compoundInterest = 1 + rate / 100;
  for (let index = 1; index < time; index++) {
    compoundInterest = compoundInterest * compoundInterest;
  }
  compoundInterest -= 1;
  compoundInterest = principle * compoundInterest;
  console.log("simple interest", simpleInter, "computeer inter", compoundInterest);
};
// console.log(calculateInterest(1000, 5, 2));
