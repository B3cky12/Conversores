function ConverterDolar() {
  var valorReal = parseFloat(document.getElementById("real").value);
  //console.log(valorReal);

  var realToDolar = valorReal * 0.19;
  //console.log(valorReal + " reais valem:");
	//console.log(realToDolar.toFixed(2) + " dolares, " + realToEuro.toFixed(2) + " euros e" + realToLibraE.toFixed(2) + " libras Esterlinas.");
	
	var elementoDolar = document.getElementById("conversao");
	
	elementoDolar.innerHTML = "R$ " + valorReal + " valem $ " + realToDolar.toFixed(2) + " dolares.";
}

function ConverterEuro() {
	var valorReal = parseFloat(document.getElementById("real").value);
  //console.log(valorReal);

  var realToEuro = valorReal * 0.16;
	
		var elementoEuro = document.getElementById("conversao");
	
	elementoEuro.innerHTML = "R$ " + valorReal + " valem € " + realToEuro.toFixed(2) + " euros."
}

function ConverterLibraE() {
	var valorReal = parseFloat(document.getElementById("real").value);
  //console.log(valorReal);

  var realToLibraE = valorReal * 0.14;
	
	var elementoLibraE = document.getElementById("conversao");
	
	elementoLibraE.innerHTML = "R$ " + valorReal + " valem £ " + realToLibraE.toFixed(2) + " libras esterlinas."
}

function Bitcoin() {
	document.getElementById("conversao").innerHTML = "R$ " + parseFloat(document.getElementById("real").value) + " valem ₿ " + (parseFloat(document.getElementById("real").value) * 0.0000041).toFixed(2) + " bitcoins."
}