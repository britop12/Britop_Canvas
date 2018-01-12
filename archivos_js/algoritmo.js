var boton1 = document.getElementById("boton1");
var texto1 = document.getElementById("texto1");

boton1.addEventListener("click", ejecutar);

function ejecutar()
{
  var numero = parseInt(texto1.value);
  if (numero % 3 == 0)
  {
     resultado.innerHTML = numero + ", <strong>Es fizz.</strong>";
  }
  if (numero % 4 == 0)
  {
    resultado.innerHTML = numero + ", <strong>Es Buzz.</strong>";
  }
  if (numero % 3 == 0 & numero % 4 == 0)
  {
    resultado.innerHTML = numero + ", <strong>Es FizzBuzz.</strong>";
  }
  if (numero % 3 != 0 & numero % 4 != 0)
  {
    resultado.innerHTML = numero + ", <strong>No es Fizz, ni  Buzz porque el residuo es diferente a 0.</strong>"
  }
}
