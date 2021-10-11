function Celsius() {
  var valorC = parseFloat(document.getElementById("valor").value);

  var Fahrenheit = (valorC * 9) / 5 + 32;
  var Kelvin = valorC + 273.15;

  var elementConverted = document.getElementById("conversao");

  elementConverted.innerHTML =
    valorC.toFixed(1) +
    "°C equivale a " +
    Fahrenheit.toFixed(1) +
    "°F e " +
    Kelvin.toFixed(1) +
    "°K.";
}

function Fahrenheit() {
  var valorF = parseFloat(document.getElementById("valor").value);

  var Celsius = ((valorF - 32) * 5) / 9;
  var Kelvin = ((valorF - 32) * 5) / 9 + 273.15;

  var elementConverted = document.getElementById("conversao");

  elementConverted.innerHTML =
    valorF.toFixed(1) +
    "°F equivale a " +
    Celsius.toFixed(1) +
    "°C e " +
    Kelvin.toFixed(1) +
    "°K.";
}

function Kelvin() {
  var valorK = parseFloat(document.getElementById("valor").value);

  var Celsius = valorK - 273.15;
  var Fahrenheit = ((valorK - 273.15) * 9) / 5 + 32;

  var elementConverted = document.getElementById("conversao");

  elementConverted.innerHTML =
    valorK.toFixed(1) +
    "°K equivale a " +
    Celsius.toFixed(1) +
    "°C e " +
    Fahrenheit.toFixed(1) +
    "°F.";
}