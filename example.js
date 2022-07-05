let addBtn = document.getElementById('add-btn')
let removeBtn = document.getElementById('remove-btn')
let count = document.getElementById('count')

let animCheck = document.getElementById('animation-checkbox')

function add() {
  count.innerHTML = Number(count.innerHTML) + 1
  animate()
}

function remove() {
  count.innerHTML = Number(count.innerHTML) - 1
  animate()
}

function animate() {
  if(animCheck.checked) {
    console.log("animation : ", animCheck.checked)
    count.style.fontSize = 'x-small'
    let animTimeout = setTimeout(function() {
      if(animTimeout) {
        clearTimeout(animTimeout)
      }
      count.style.fontSize = 'x-large'
    }, 300)
  }
}

addBtn.addEventListener("click", add)
removeBtn.addEventListener("click", remove)