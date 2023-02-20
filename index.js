const button = document.querySelector('.button')
let first = document.querySelector('.first-block')
let second = document.querySelector('.second-block')

button.addEventListener('click', onButtonClick)

function onButtonClick() {
    first.classList.toggle('first-block-active')
    second.classList.toggle('second-block-active')
}
