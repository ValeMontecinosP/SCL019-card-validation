import validator from './validator.js';

console.log(validator);

document.getElementsByClassName("page")[0].style.display = "block";
document.getElementsByClassName("page")[1].style.display = "none";

function saludo() {
    let name = document.getElementById('nameperson').value;
    document.getElementById('hello').innerHTML = 'Hola '+name;
    document.getElementsByClassName("page")[0].style.display = "none";
    document.getElementsByClassName("page")[1].style.display = "block";
    
}
function myFunction() {
  let x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


let ccNumber = document.getElementById("creditCardNumberInput").value;
console.log(typeof(ccNumber))
let creditCardNumber = ccNumber.split("").map(Number);
console.log(creditCardNumber)
//let ceciNumber = parseInt(ccNumberSplit)
//console.log(ceciNumber)
 
if (validator.isValid(creditCardNumber)) {
    document.getElementById('validacion').innerHTML = 'Tu tarjeta es válida';
    validator.maskify(creditCardNumber);
    } else {
    document.getElementById('validacion').innerHTML = 'Tu tarjeta es inválida';
    validator.maskify(creditCardNumber);
    }
        
//console.log(numSum)
//document.getElementById("validacion").innerHTML=isValid