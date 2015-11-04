// Find missing letter in alphabet 

function fearNotLetter(str) {
  // in case input contains mixed cases
  str = str.toLowerCase();  
  //charCodeAt returned string, casting to Number
  var beginChar = Number.parseInt(str.charCodeAt(0)); 
  
  for (var i = 0; i < str.length; i++){
    // current character code should be the same as corresponding code in ASCII.
    // if it's different than return proper one  
    if(str.charCodeAt(i) !== beginChar + i){      
      return String.fromCharCode(beginChar + i); 
    } 
  }
  //if all characters are matched return undefined  
}

fearNotLetter("abcefghjklmno");
