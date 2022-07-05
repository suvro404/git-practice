let btn = document.getElementById('count-btn')
let count = document.getElementById('count')

function add() {
  count.innerHTML = Number(count.innerHTML) + 1
}

btn.addEventListener("click", add)