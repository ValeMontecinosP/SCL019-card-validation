//import validator from './validator.js';
//console.log(validator);
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

function isValid() {
  let ccNumber = document.getElementById("creditCardNumber").value;
  console.log(typeof(ccNumber))
  let ccNumberSplit = ccNumber.split("").map(Number);
  console.log(ccNumberSplit)
  //let ceciNumber = parseInt(ccNumberSplit)
  //console.log(ceciNumber)
 
  //document.getElementById("validacion").innerHTML=ccNumber
  let numSum = 0;
  let value;
  for (var i = 0; i < 16; ++i) {
        if (i % 2 == 0) {
            value = 2*ccNumberSplit[i];
            if (value >= 10) {
              value = (Math.floor(value / 10) + (value % 10));
                
            }
        } 
        else {
            value = +ccNumberSplit[i];
        }
        //console.log(value)
        numSum += value;
        
        console.log(numSum)
    }
   
    
    

    return (numSum % 10 == 0);
    console.log(numSum)
  document.getElementById("validacion").innerHTML=isValid
}