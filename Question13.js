/*
---Directions
   Given a traffic light color ("red", "yellow", "green"), return the action
   --Examples
   trafficLight("red") === "Stop"
   trafficLight("green") === "Go"
   trafficLight("yellow") === "Get readly"
*/
const trafficLight = (color) => {
  const normalized = color.toLowerCase();
  switch (normalized) {
    case "red":
      return "Stop";
    case "green":
      return "Go";
    case "yellow":
      return "Get readly";
  }
};
// console.log(trafficLight("Red"));
