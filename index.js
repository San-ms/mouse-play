
// Set canvas size

const canvasTag = document.querySelector("canvas")
canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px"

// Set context (2d)

const context = canvasTag.getContext("2d")
context.scale(2, 2)


// mouse Position

let aimX = null
let aimY = null
let currentX = null
let currentY = null



// Esto es para elegir /crear/mostrar una sola imagen
// const image = document.createElement("img")
// image.src = "img/1.jpg"


// Para elegir/mostrar varias imagenes:
let i = 0

const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"].map(src => {
  const image = document.createElement("img")
  image.src = src
  return image
})


// Para seguir el ovimiento del mouse

document.addEventListener("mousemove", function (event1) {
  aimX = event1.pageX
  aimY = event1.pageY
  if (currentX === null) {
    currentX = event1.pageX
    currentY = event1.pageY
  }

  // para que la imagen se queda pegada al cursor
  // if (images[i].complete) {
  //   context.drawImage (images[i], event1.pageX - 200, event1.pageY - 200, 400, 600)
  // }
})

// Camabir de imagen con el click

canvasTag.addEventListener("click", function () {
  i = i + 1

  if (i >= images.length) {
    i = 0
  }
})

// Dibujar la imagen elegida "siguiendo"  el mouse

const draw = function() {
  if (currentX) {
    if (images[i].complete) {
      context.drawImage (images[i], currentX - 200, currentY - 300, 400, 600)
    }

    // Hacer el movimiento mas smooth

    currentX = currentX + (aimX - currentX) * 0.1
    currentY = currentY + (aimY - currentY) * 0.1
  }
  // loop
  requestAnimationFrame(draw)
}
// Llamar la funcion
draw()
