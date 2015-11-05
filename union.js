/*
Write a function that takes two or more arrays 
and returns a new array of unique values in the 
order of the original provided arrays.
*/

Array.prototype.unique = function() {
    return this.reduce(function(element, index) {
        if (element.indexOf(index) < 0) {
            element.push(index);
        }
        return element;
    }, []);
};

function unite(arr1, arr2, arr3) {
  var result = [];
  // insert all arrays from arguments into new array in order
  for(var i = 0; i < arguments.length; i++){   
    result = result.concat(arguments[i]);
  }
  //remove duplicates
  console.log(result);
  return result.reduce(function(element, index) {
        if (element.indexOf(index) < 0) {
            element.push(index);
        }
        return element;
    }, []);
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
