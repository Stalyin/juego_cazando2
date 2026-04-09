//obtener canvas
let canvas = document.getElementById("areaJuego")
let context = canvas.getContext("2d")

//8. Crear una función graficarGato (sin parámetros) que dibuje un rectángulo centrado en el canvas. 

const ANCHO_DIBUJO = 50
const ALTO_DIBUJO = 50

const ANCHO = canvas.width / 2 - ANCHO_DIBUJO / 2
const ALTO = canvas.height / 2 - ALTO_DIBUJO / 2

function graficarGato (){
    context.fillStyle = "blue"
    context.fillRect(ANCHO,ALTO,ANCHO_DIBUJO,ALTO_DIBUJO)
}