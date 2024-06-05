const canvas = document.querySelector("#canvas")
let num = 16;
for (let x = 0; x < num; x++) {
  let row = document.createElement('div')
  for (let y = 0; y < num; y++) {
    let newDiv = document.createElement('div')
    newDiv.style.cssText = 'background-color: red; width: 20px; height:20px; border: 2px solid blue;'
    row.appendChild(newDiv)
    console.log('div created')
  }
  canvas.appendChild(row)
}