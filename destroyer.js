/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(array) {
  var arrgs = arguments;  
   
  for(var i = 1; i < arrgs.length; i++){
    array = array.filter(function (el) {    
      return !(el == arrgs[i]);                   
    });
  }  
  return array;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 3, 5);
