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

const computeInterest = (principle, rate, time) => {
  const simpleInter = (1 * rate * time) / 100;
  let computeInterest = 1 + rate / 100;
  for (let index = 1; index < time; index++) {
    computeInterest = computeInterest * computeInterest;
  }
  computeInterest -= 1;
  computeInterest = principle * computeInterest;
  console.log("simple interest", simpleInter, "computeer inter", computeInterest);
};
// console.log(computeInterest(1000, 5, 2));
