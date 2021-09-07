const count = document.querySelector('.count');
const add = document.querySelector('.add');
const resetCount = document.querySelector('.reset');
const subtract = document.querySelector('.subtract');


add.addEventListener('click', () => {
count.innerHTML++;
setColor()
});

subtract.addEventListener('click', () => {
    count.innerHTML--;
    setColor()
});

resetCount.addEventListener('click', () => {
    count.innerHTML = 0;
    setColor()
});

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = 'green'
    }
    else if (count.innerHTML < 0) {
        count.style.color = 'orangered'
    }
    else {
        count.style.color = 'black'
    }
}
