/*
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  
  arr = arr.filter(function(el){
      if(el) return true; 
      else return false;
  });
  return arr;
}

bouncer([7, "ate", "", false, 9]);
