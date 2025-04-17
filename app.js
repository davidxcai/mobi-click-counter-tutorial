let counter = 0;
const counterElement = document.getElementById("clickCount");
const button = document.getElementById("clickButton");

function updateDisplay() {
  counterElement.textContent = `Clicks: ${counter}`;
}

button.addEventListener("click", function () {
  counter++;
  updateDisplay();
});
