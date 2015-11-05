/*
Return the sum of all odd Fibonacci numbers 
up to and including the passed number 
if it is a Fibonacci number.
*/

function sumFibs(num) {
 
var numA = 0;
var numB = 1;
var sum = 0;
   
  while (numB <= num) {
    if (numB %2 !==0) {
      sum += numB;
    }
    var added = numA + numB;
    numA = numB;
    numB = added;
  }   
 return sum;
}
