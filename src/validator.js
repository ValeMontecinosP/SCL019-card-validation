const validator = {
  isValid: (creditCardNumber) => {
    let numSum = 0;
    let value;
    for (let i = 0; i < 16; ++i) {
          if (i % 2 == 0) {
              value = 2*creditCardNumber[i];
              if (value >= 10) {
                value = (Math.floor(value / 10) + (value % 10));  
              }
          } 
          else {
              value = +creditCardNumber[i];
          }
          numSum += value;
          console.log(numSum)
    }
          
    if (numSum%10==0) {
          return true;
        }
        else {
          return false;
        }

  },

  maskify: (creditCardNumber) => {

    let maskedCc = creditCardNumber.slice(0, creditCardNumber.length-4);
    let arrayMasked = [];
    let lastFour = creditCardNumber.slice(-4).join('');
    
    if (creditCardNumber.length <= 4){
      return lastFour;
    }
      
    for (let i = 0; i < maskedCc.length; i++){
      arrayMasked.push('#');
    }
    
    let joinMasked = arrayMasked.join('');
    
    return joinMasked + lastFour;
    }
}

export default validator;
