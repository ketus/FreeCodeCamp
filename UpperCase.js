function titleCase(str) {
  str = str.split(' ').map(function(el){
    return el.charAt(0).toUpperCase() + el.substr(1).toLowerCase();
  }).join(' ');
  
  return str;
}

titleCase("I'm a little tea pot");
