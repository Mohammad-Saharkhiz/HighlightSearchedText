const searchInput = document.querySelector('input')
const buttonElem = document.querySelector('button')
const textElem = document.querySelector('#paragraph')
let regex = null
let valueInput = null

searchInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        search()
    }
})

buttonElem.addEventListener('click', () => {
    search()
})

function search() {
    valueInput = searchInput.value
    regex = new RegExp(valueInput, 'gi')
    textElem.innerHTML = textElem.textContent.replace(regex, (item) => `<mark>${item}</mark>`)
}