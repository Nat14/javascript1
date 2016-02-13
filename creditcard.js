function luhn(creditnumber) {

// var creditCard = "4556737586899855";
var creditCard = creditnumber;
var lastDigit = creditCard[15];

function multiply2(number) {
  return number * 2;
}

var position1 = moreThan9andSubtract(multiply2(creditCard[0]));
var position3 = moreThan9andSubtract(multiply2(creditCard[2]));
var position5 = moreThan9andSubtract(multiply2(creditCard[4]));
var position7 = moreThan9andSubtract(multiply2(creditCard[6]));
var position9 = moreThan9andSubtract(multiply2(creditCard[8]));
var position11 = moreThan9andSubtract(multiply2(creditCard[10]));
var position13 = moreThan9andSubtract(multiply2(creditCard[12]));
var position15 = moreThan9andSubtract(multiply2(creditCard[14]));

function moreThan9andSubtract(number) {
  if (number > 9) {
    return number - 9;
  }
  else {
    return number;
  }
}

var total = position1 + position3 + position5 + position7 + position9 + position11 + position13 + position15 +
parseInt(creditCard[1]) + parseInt(creditCard[3]) + parseInt(creditCard[5]) + parseInt(creditCard[7]) + parseInt(creditCard[9]) +
parseInt(creditCard[11]) + parseInt(creditCard[13])

var lastDigitShouldbe = 10 - (total%10)

console.log("This is total: " + total);
console.log("This is last Digit Should be: " + lastDigitShouldbe);
console.log("This is real last digit: " + lastDigit);

if (lastDigitShouldbe === lastDigit) {
  console.log("This is a valid card number");
}
else {
  console.log("This number cannot be validated by Luhn formula ")
}

}
