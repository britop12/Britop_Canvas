var boton2 = document.getElementById("boton2");

boton2.addEventListener("click", calcular);

function calcular()
{
  var a = prompt("Que tipo de operacion necesitas?");
  var x = parseFloat(prompt("Primer numero"));
  var y = parseFloat(prompt("Segundo numero"));
  var resultado;
  if (a == 1)
  {
    resultado = x + y;
    resultado2.innerHTML = "<strong>" + resultado + "</strong>"
  }
  else if (a == 2 )
  {
      resultado = x - y;
      resultado2.innerHTML = "<strong>" + resultado + "</strong>"
  }
  else if (a == 3)
  {
      resultado = x * y;
      resultado2.innerHTML = "<strong>" + resultado + "</strong>"
  }
  else if (a == 4)
  {
      resultado = x / y;
      resultado2.innerHTML = "<strong>" + resultado + "</strong>"
  }
  else
  {
    alert("Operacion equivocada");
  }
}
