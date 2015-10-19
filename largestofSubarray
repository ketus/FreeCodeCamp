function largestOfFour(arr) {
  arr = arr.map(function(el){
    return el.sort(function(a,b){   // sort each inner array so last one is the biggest
      return a - b;
    })[el.length - 1];              // and return its last element
  });
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
