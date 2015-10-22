/*
Compare two arrays and return a new array 
with any items not found in both of the original arrays.
Symmetrical difference algorithm
*/

function diff(arr1, arr2) {
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      result.push(arr2[i]);
    }
  }
  return result;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
