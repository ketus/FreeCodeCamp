/*
Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a multidimensional array.
*/

function chunk(arr, size) {
   var sliced = [];

  while(arr.length > 0){
    sliced.push(arr.splice(0, size));
    console.log(arr);
  }
  return sliced;
}

chunk([0, 1, 2, 3, 4, 5], 2);
