/*
--- Directions
   Convert temperatures between Celsius and Fahrenheit.
   If type is "celsius", convert Celsius -> Fahrenheit.
   If type is "fahrenheit", convert Fahrenheit -> Celsius.
--- Examples
   celsiusToFahrenheit(25, "celsius") -> 77
   celsiusToFahrenheit(77, "fahrenheit") -> 25
*/

const celsiusToFahrenheit = (deg, type) => {
  const normalized = type.toLowerCase();
  if (normalized === "celsius") {
    return (deg * 9) / 5 + 32;
  }
  if (normalized === "fahrenheit") {
    return ((deg - 32) * 5) / 9;
  }
};
// console.log(celsiusToFahrenheit(25, "celsius")); // 77
// console.log(celsiusToFahrenheit(77, "fahrenheit")); // 25
