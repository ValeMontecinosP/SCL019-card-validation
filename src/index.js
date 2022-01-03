import validator from './validator.js';
console.log(validator);

document.getElementsByClassName("page")[0].style.display = "block";
document.getElementsByClassName("page")[1].style.display = "none";

let x = document.getElementById("saludo");
x.addEventListener("click", btnSaludo);

function btnSaludo() {
    let name = document.getElementById('nameperson').value;
    document.getElementById('hello').innerHTML = 'Hola '+name;
    document.getElementsByClassName("page")[0].style.display = "none";
    document.getElementsByClassName("page")[1].style.display = "block";
    
}
// * Input numero de tarjeta
creditCardNumberInput.addEventListener('keyup', (e)  => {
	let valorInput = e.target.value;

    creditCardNumberInput.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();
})


let y = document.getElementById("pass");
y.addEventListener("click", btnPassword);

function btnPassword() {
  let p = document.getElementById("myInput");
  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}

let z = document.getElementById("valid");
z.addEventListener("click", btnValid);

function btnValid() {

    let ccNumber = document.getElementById("creditCardNumberInput").value;
    console.log(typeof(ccNumber))
    let creditCardNumber = ccNumber.split("").map(Number);
    console.log(creditCardNumber)
    //let ceciNumber = parseInt(ccNumberSplit)
    //console.log(ceciNumber)
    
    if (validator.isValid(creditCardNumber)==true) {
        document.getElementById('validacion').innerHTML = 'Tu tarjeta es válida';
        document.getElementById('creditCardNumberInput').value = validator.maskify(creditCardNumber);
        //document.getElementById("creditCardNumberInput").innerHTML=validator.maskify(creditCardNumber);
        } else {
        document.getElementById('validacion').innerHTML = 'Tu tarjeta es inválida';
        document.getElementById('creditCardNumberInput').value = validator.maskify(creditCardNumber);
        //document.getElementById("creditCardNumberInput").innerHTML=validator.maskify(creditCardNumber);
        }
}    
//console.log(numSum)
//document.getElementById("validacion").innerHTML=isValid