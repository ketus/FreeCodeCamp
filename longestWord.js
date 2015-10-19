Array.prototype.sortAscending = function(){
  return this.sort(function(a,b){
    return a - b});
};

function findLongestWord(str) {
  str = str.split(' ').map(function(el) {
    return el.length;
  }).sortAscending();
  
                  
  return str[str.length - 1];
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
