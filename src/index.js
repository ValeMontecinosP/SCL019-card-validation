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