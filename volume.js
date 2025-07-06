let innerElement = document.getElementById('inner');

let numb = 0;


function increaseVolume() {
    if (numb != 500) {
        numb = numb + 10;
        innerElement.style.height = numb + 'px';
    }
}

function decreaseVolume() {
    if (numb != 10) {
        numb = numb - 10;
        innerElement.style.height = numb + 'px';
    }
}