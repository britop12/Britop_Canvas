var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var boton4 = document.getElementById("boton4");
var boton5 = document.getElementById("boton5");

boton2.addEventListener("click", sumar);
boton3.addEventListener("click", restar);
boton4.addEventListener("click", multiplicar);
boton5.addEventListener("click", dividir);

function sumar()
{
  var x = parseInt(prompt("Primer número que quieres sumar"));
  var y = parseInt(prompt("Segundo número que quieres sumar"));
  resultado = x + y;
  resultado2.innerHTML = "Tu resultado de la suma es: " + "<strong>" + resultado + ".</strong>"
}
function restar()
{
  var x = parseInt(prompt("Primer número que quieres restar"));
  var y = parseInt(prompt("Segundo número que quieres restar"));
  resultado = x - y;
  resultado2.innerHTML = "Tu resultado de la resta es: " + "<strong>" + resultado + ".</strong>"
}
function multiplicar()
{
  var x = parseInt(prompt("Primer número que quieres multiplicar"));
  var y = parseInt(prompt("Segundo número que quieres multiplicar"));
  resultado = x * y;
  resultado2.innerHTML = "Tu resultado de la multiplicación es: " + "<strong>" + resultado + ".</strong>"
}
function dividir()
{
  var x = parseInt(prompt("Primer número que quieres dividir"));
  var y = parseInt(prompt("Segundo número que quieres dividir"));
  resultado = x / y;
  resultado2.innerHTML = "Tu resultado de la división es: " + "<strong>" + resultado + ".</strong>"
}
