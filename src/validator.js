const validator = {
  isValid: function validar(creditCardNumber) {

    let numSum = 0;
    let value;
    for (var i = 0; i < creditCardNumber.lenght; ++i) {
          if (i % 2 == 0) {
              value = 2*creditCardNumber[i];
              if (value >= 10) {
                value = (Math.floor(value / 10) + (value % 10));
                  
              }
          } 
          else {
              value = +creditCardNumber[i];
          }
          //console.log(value)
          numSum += value;
          console.log(numSum)
  
    if (numSum%10==0) {
          return true;
        }
        else {
          return false;
        }
  
    
  }
  },
  maskify: function enmascarar(creditCardNumber){
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }
}
export default validator;
