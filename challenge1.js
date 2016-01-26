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
