let countElement = document.getElementById('count');

let numb = 0;


function increaseCount() {
    // if (numb < 10) {
        numb = numb + 1;
        // numb += 1;
        countElement.textContent = numb;

    // }
}

function decreaseCount() {
    if (numb !=0) {
        numb = numb - 1;
        // numb += 1;
        countElement.textContent = numb;
    }
}
