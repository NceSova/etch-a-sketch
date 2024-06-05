const canvas = document.querySelector("#canvas")
let num = 16;
let dimensions = 400/num;
for (let x = 0; x < num; x++) {
  let row = document.createElement('div')
  row.style.cssText = 'flex:'
  for (let y = 0; y < num; y++) {
    let newDiv = document.createElement('div')
    newDiv.style.cssText = `background-color: white; width: ${dimensions}px; height:${dimensions}px; flex: 1 1 1`
    row.appendChild(newDiv)
    console.log('div created')
  }
  canvas.appendChild(row)
}

canvas.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = 'blue'
})