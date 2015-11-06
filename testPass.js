/*
find first element that passes test from 2nd argument
*/

function find(arr, func) { 
  var num;
  for(var i = 0; i< arr.length; i++){
    if(func(arr[i]) === true) return arr[i];
  }  
  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
