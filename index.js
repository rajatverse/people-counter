let prevEl = document.getElementById('prev')
let countEl = document.getElementById('count')

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    countStr = count + ' - '
    prevEl.textContent += countStr
    count = 0
    countEl.textContent = count
}