var boton1 = document.getElementById("boton1");
var texto1 = document.getElementById("texto1");

boton1.addEventListener("click", ejecutar);

function ejecutar()
{
  var numero = parseInt(texto1.value);
  if (numero % 3 == 0)
  {
     resultado.innerHTML = numero +  " Es fizz";
  }
}
