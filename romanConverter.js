/*
Convert the given number into a roman numeral.
*/

var romans = {
  M:  1000,
  CM: 900,
  D:  500,
  CD: 400,
  C:  100,
  XC: 90,
  L:  50,
  XL: 40,
  X:  10,
  IX: 9,
  V:  5,
  IV: 4,
  I:  1
};

function convert(num) {
  var result = '';
  for (var i in romans){
    while(num >= romans[i]){
      result += i;
      num -= romans[i];
    }
  }  
  return result;
}

convert(12);
