/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  
  if(min === max) return min + max;
  
  /************************************** 
  Solution with reduce()
  
  
  for(var i = 1; min + i < max; i++){
    arr.splice(i, 0, min + i); 
  }
  
  arr = arr.reduce(function(a,b){
    return a + b;
  }, 0);
  return arr; 
  
  **************************************/
  
  
  //  Solution with for loop
  var result = 0;
  for(var i = min; i <= max; i++){
    result += i; 
  }
  return result;
}

sumAll([1, 4]);
