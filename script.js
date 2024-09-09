const BUTTON = document.querySelector(".btn");
const COUNTER = document.querySelector(".counter");
const CAT = document.querySelector(".cat");
const CAT_OPEN = document.querySelector(".cat-open");
let count = 0;

BUTTON.addEventListener("mousedown", mouseDown)
CAT.addEventListener("mousedown", mouseDown)

CAT.addEventListener("mouseup", mouseUp)
BUTTON.addEventListener("mouseup", mouseUp)


function mouseDown () {
    count++;
    COUNTER.innerHTML = 'Count: ' + count;
    CAT.src = 'images/cat-open-mouth.jpeg';
}

function mouseUp() {
    CAT.src = 'images/cat-close-mouth.jpeg';
}
