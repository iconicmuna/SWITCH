let screenElement = document.getElementById('screen');
let inputElement = document.getElementById('input')
let charElement = document.getElementById('char');


function update() {
    screenElement.textContent = inputElement.value;  
    charElement.textContent = inputElement.value.length;
}



inputElement.addEventListener('input', update);