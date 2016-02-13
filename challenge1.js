// You are writing the user registration page for a secure web site.
// On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:


// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"
// Stretch goal:
//
// Password has to contain at least one digit
// Super stretch goal:
//
// Password has to contain a lower and an uppercase letter (hint: use toUpperCase or toLowerCase)
// Write a main method that
//
// First lets a user input both user ID and password,
// Then create methods corresponding to criteria above to evaluate the user ID and password
// Then output whether the combination the combination is acceptable or not.
// Run the program and test it for all criteria listed above by inputting different values.
// Hint: See how the javascript String class can help you.

function isUserValid(str) {
  return str.length > 5 && !str.includes("!") && !str.includes("#")  && !str.includes("$") ;
}

function isPasswordValid(str) {
  return str.length > 5 && (str.includes("!") || str.includes("#")  || str.includes("$")) && str !== "password"
  && includeNumber(str) && includeLower(str) && includeUpper(str);
}

function includeNumber(str) {
  return str.includes("0") || str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") ||
  str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9");
}

function includeLower(str) {
    return !(str == str.toUpperCase());
}

function includeUpper(str) {
    return !(str == str.toLowerCase());
}

<!-- main function -->
function isUserAndPasswordValid() {
  userID = prompt("user name: ");
  password = prompt("Password: ");
  alert(isUserValid(userID) && isPasswordValid(password));
}
