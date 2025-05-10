var counter = 0;
var counterElement = document.getElementById("clickCount");
var button = document.getElementById("clickButton");

function updateDisplay() {
  counterElement.textContent = `Clicks: ${counter}`;
}

button.addEventListener("click", function () {
  counter++;
  updateDisplay();
});
