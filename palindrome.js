function palindrome(str) {
  str = str.toLowerCase().replace(/[\s.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '').toString();
  var temp = str.split('').reverse().join('');
  
  return str == temp;
}
//palindrome("0_0 (: /-\ :) 0-0");
