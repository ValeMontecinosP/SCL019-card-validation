
/*importamos nuestra función validator y maskify de un módulo exclusivo para estas funciones*/
import validator from './validator.js';
console.log(validator);

/*creamos interactividad para dar una bienvenida a través de manipulación de elementos del DOM, incluyendo
la función "saludo"*/

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

// Input número de tarjeta
  document.getElementById("creditCardNumberInput").addEventListener('keyup', (e)  => {
	let valorInput = e.target.value;

    document.getElementById("creditCardNumberInput").value = valorInput
	// Se dejan de permitir espacios en blancos
	.replace(/\s/g, '')
	// Permitimos que se escriban sólo carácteres numéricos
})

/*función password para ocultar el CVV*/
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

/* declaramos variable para el botón Validar */
let z = document.getElementById("valid");
z.addEventListener("click", btnValid);

/*creamos función para traer string del número de tarjeta y transformarlo en array con un .split y simultáneamente 
convertirlo en valor númerico con un .map */
function btnValid() {
    let ccNumber = document.getElementById("creditCardNumberInput").value;
    console.log(typeof(ccNumber))
    let creditCardNumber = ccNumber.split("").map(Number);
    console.log(creditCardNumber)

  /* a través de una condicional aplicamos función validator a nuestra variable creditCardNumber y en simultáneo
  llamamos a la función Maskify para retornar string enmascarado */

    if (validator.isValid(creditCardNumber)==true) {
        document.getElementById('validacion').innerHTML = 'Tu tarjeta es válida';
        document.getElementById('creditCardNumberInput').value = validator.maskify(creditCardNumber);
        } 
        else {
        document.getElementById('validacion').innerHTML = 'Tu tarjeta es inválida';
        document.getElementById('creditCardNumberInput').value = validator.maskify(creditCardNumber);
        }
}    
