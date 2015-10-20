/*
Return the lowest index at which a value (second argument) 
should be inserted into a sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater 
than 1 (0th index), but less than 2 (1st index).
*/

function where(arr, num) {
  var i = 0;
  arr = arr.sort(function(a,b) {
    return a - b;
  });
  
  if(num > arr[arr.length - 1]) return ( arr.length );
  
  while(i < arr.length){    
    if(num <= arr[i]) return i;      
    i++;
  }  
}

where([2, 5, 10], 15);
