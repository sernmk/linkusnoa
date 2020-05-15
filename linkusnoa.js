var buttons = document.querySelectorAll('.linkusnoa'),index, button;

for (index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    event.preventDefault();
    window.open(this.dataset.href,'_blank');
}
