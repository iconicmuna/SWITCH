let bulbElement = document.getElementById('bulb');
let btnElement = document.getElementById('btn');



function socket() {
    if (btnElement.textContent == 'Turn On') {
        bulbElement.src = '/images/bulb_on.gif';
        btnElement.textContent = 'Turn Off';
    } else if (btnElement.textContent = 'Turn On') {
        bulbElement.src = '/images/bulb_off.gif';
    }
}