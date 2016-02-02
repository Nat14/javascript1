var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
numberPair = array.length/2;

if (array.length%2 == 0) {
var answer;
  for (i = 0; i < numberPair; i++ ) {
    pair = (array.pop());
    pairWith = Math.floor(Math.random() * (array.length));
    answer = prompt(pair + " pairs with " + array[pairWith] +  ". Do you want to keep it? (Y/N)");
    if (answer.toUpperCase() != "Y") {
      array.push(pair);
      numberPair++;
    } else {
        console.log(pair + " pairs with " + array[pairWith]);
        array.splice(pairWith,1);
    }

  }
} else {
  console.log("Cannot pair this!");
}
