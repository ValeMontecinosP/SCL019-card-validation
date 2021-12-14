//import validator from './validator.js';

//console.log(validator);
function saludo() {
    let name = document.getElementById('nameperson').value;
    document.getElementById('hello').innerHTML = 'Hola '+name;
}
function myFunction() {
  let x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}