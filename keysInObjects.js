/*
Make a function that looks through an array of objects 
(first argument) and returns an array of all objects 
that have matching property and value pairs (second argument). 
Each property and value pair of the source object has to be 
present in the object from the collection 
if it is to be included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), 
because it contains the property and it's value, 
that was passed on as the second argument.
*/

function where(collection, source) {
  var arr = [];  
  var keys = Object.keys(source);
  var countMatchingProps = 0;
  var currentProp;
  
  for (var i = 0; i < collection.length; i++) {    
    countMatchingProps = 0;
    for(var j = 0; j < keys.length; j++){
      // assigned to variable for a bit of readability.
      currentProp = keys[j];
      // if object contains key ->
      if(collection[i].hasOwnProperty(currentProp)){
        // -> then compare their values nad increment counter
        if(collection[i][currentProp] === source[currentProp]){
          countMatchingProps++;         
        }
      }  
      // if number of matched properties are 
      // equal to keys we can push current object to array
      if (countMatchingProps === keys.length) arr.push(collection[i]);
    }    
  }  
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
