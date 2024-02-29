const counter = document.querySelector("p");
const decreaseValue = document.getElementById("decrease");
const resetValue = document.getElementById("reset");
const increaseValue = document.getElementById("increase");
let counterValue = 0;
  
function decreaseCounterValue () {
  counter.textContent = --counterValue;
}  

function resetCounterValue () {
  counterValue = 0;
  counter.textContent = counterValue;
}

function increaseCounterValue () {
  counter.textContent = ++counterValue;
}


decreaseValue.addEventListener("click", decreaseCounterValue);
resetValue.addEventListener("click", resetCounterValue);
increaseValue.addEventListener("click", increaseCounterValue);
