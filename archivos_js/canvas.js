alert("Bienvenido a mi pequeña página");

var d = document.getElementById("canvas");
var papel = d.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 5;
  lienzo.moveTo(xinicial, yinicial)
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var movimiento = 3;
  var colorcito = "Green";

  switch(evento.keyCode)
  {
    case teclas.UP:
      console.log("arriba");
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento
    break;
    case teclas.DOWN:
      console.log("abajo");
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento
    break;
    case teclas.LEFT:
      console.log("izquierda");
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento
    break;
    case teclas.RIGHT:
      console.log("derecha");
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento
    break;
    default:
      console.log("Otra tecla");
      break;
  }

}
