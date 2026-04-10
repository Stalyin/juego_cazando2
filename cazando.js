//obtener canvas
let canvas = document.getElementById("areaJuego")
let context = canvas.getContext("2d")

//8. Crear una función graficarGato (sin parámetros) que dibuje un rectángulo centrado en el canvas. 
// const ANCHO_DIBUJO = 80
// const ALTO_DIBUJO = 50
const ANCHO_GATO = 80;
const ALTO_GATO = 50;

const ANCHO = canvas.width / 2 - ANCHO_GATO / 2
const ALTO = canvas.height / 2 - ALTO_GATO / 2

let gatoX = 0;
let gatoY = 0;

let comidaX = 0;
let comidaY = 0;

const ANCHO_COMIDA = 25;
const ALTO_COMIDA = 25;

function graficarGato (){
    context.fillStyle = "blue"
    context.fillRect(ANCHO,ALTO,ANCHO_GATO,ALTO_GATO)
}

//12. Crear una función graficarComida (sin parámetros) que dibuje un cuadrado en la esquina superior izquierda
function graficarComida (){
    context.fillStyle = "yellow"
    context.fillRect(canvas.width - ANCHO_COMIDA, 0, ANCHO_COMIDA, ALTO_COMIDA)
}

function iniciarJuego (){
    graficarGato();
    graficarComida();
}

