/*
Repeat a given string (first argument) n times (second argument).
Return an empty string if n is a negative number.
*/

function repeat(str, num) {
  if(!str || num < 1) return '';
  
  if (num === 1) return str;
  else {
    return str + repeat(str, num - 1);
  }
}

repeat("abc", 3);
