var num1;
var num2;
var result;

function suma(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	console.log(num1);
	num2 = num2Element.value;
	console.log(num2);
	result = 'La suma es = ' + num1 + num2;
	console.log(result);
	document.getElementById("resultado").innerHTML = result;
}

function rest(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	console.log(num1);
	num2 = num2Element.value;
	console.log(num2);
	result = 'La resta es = ' + (num1 - num2);
	console.log(result);
	document.getElementById("resultado").innerHTML = result;
}

function mult(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	console.log(num1);
	num2 = num2Element.value;
	console.log(num2);
	result = 'la multiplicacion es = ' + num1 * num2;
	console.log(result);
	document.getElementById("resultado").innerHTML = result;
}

function divi(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	console.log(num1);
	num2 = num2Element.value;
	console.log(num2);
	result = 'La divicion es = ' + num1 / num2;
	console.log(result);
	document.getElementById("resultado").innerHTML = result;
}

function pot(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	console.log(num1);
	num2 = num2Element.value;
	console.log(num2);
	result = 'la potencia es = ' + num1 ** num2;
	console.log(result);
	document.getElementById("resultado").innerHTML = result;
}

function raiz(){
	var num1Element = document.getElementById("num1");
	num1 = num1Element.value;
	console.log(num1);
	result = 'la raiz cuadrada del primer numero es = ' + Math.sqrt(num1);
	console.log(result);
	document.getElementById("resultado").innerHTML = result;
}