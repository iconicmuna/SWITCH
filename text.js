let innerElement = document.getElementById("inner");
let nameElement = document.getElementById("name");
// we are grabbing the input field here
let numbElement = document.getElementById("numb");
// we are grabbing the span here
let percentageElement = document.getElementById("percentage");
// we are grabbing the percentage which is the h4

let noOfChar;
let calculation;

function increase() {
  noOfChar = nameElement.value.length;
  numbElement.textContent = 60 - noOfChar;

  calculation = (noOfChar/60)*100;

  innerElement.style.width = calculation+"%";
  percentageElement.textContent = calculation+"%";
  percentageElement.textContent = Math.round(calculation)+"%";
}

nameElement.addEventListener("input", increase);