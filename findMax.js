var testArray = [3, 8, 20, 231, 232, 594, 321, 23, 9];
var max = 0;

for(var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++){

  var current = testArray[arrayPosition];

  if(max < current){

    max = current;

  }
}

console.log("The max number is: " + max);
