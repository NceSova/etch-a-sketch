const canvas = document.querySelector('#canvas')
const clearButton = document.querySelector('#clear')

let num = 16;
let dimensions = 400 / num;

function generateCanvas(numOfPixels) {
  for (let x = 0; x < numOfPixels; x++) {
    let row = document.createElement('div')
    row.style.cssText = 'flex:'
    for (let y = 0; y < numOfPixels; y++) {
      let newDiv = document.createElement('div')
      newDiv.style.cssText = `background-color: white; width: ${dimensions}px; height:${dimensions}px; flex: 1 1 1`
      row.appendChild(newDiv)
      console.log('div created')
    }
    canvas.appendChild(row)
  }
}

generateCanvas(num);
const colorInput = document.querySelector('#color')
const numInput = document.querySelector('#number')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

numInput.addEventListener('change', (e) => {
  num = e.target.value
  dimensions = 400 / num;
  canvas.innerHTML = ''
  generateCanvas(num)
})


let color = '#0000ff'
colorInput.addEventListener('change', (e) => {
  color = e.target.value
})

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  e.preventDefault()
  e.target.style.backgroundColor = `${color}`
}

canvas.addEventListener('mouseover', changeColor)
canvas.addEventListener('mousedown', changeColor)

clearButton.addEventListener('click', () => {
  console.log("clear!");
  const pixels = document.querySelectorAll('#canvas div')
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white'
  })
})