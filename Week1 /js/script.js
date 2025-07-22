function changeText() {
  var textsArray = ["New 1", "New 2", "New 3", "New 4", "New 5"];
  var number = getRandomNumberBetween(0, textsArray.length - 1);
  console.log("Index: ", number);
  document.getElementById("heading").innerHTML = textsArray[number];
}
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
