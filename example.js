let addBtn = document.getElementById('add-btn')
let removeBtn = document.getElementById('remove-btn')
let count = document.getElementById('count')

let animCheck = document.getElementById('animation-checkbox')

function add() {
  count.innerHTML = Number(count.innerHTML) + 1
  console.log("animation : ", animCheck.checked)
}

function remove() {
  count.innerHTML = Number(count.innerHTML) - 1
}

addBtn.addEventListener("click", add)
removeBtn.addEventListener("click", remove)