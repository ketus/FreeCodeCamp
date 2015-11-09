/*
Return a new array that transforms the element's 
average altitude into their orbital periods.

The array will contain objects in the format 
{name: 'name', avgAlt: avgAlt}.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  var result = arr.map(function(element){
    var radius = earthRadius + element.avgAlt;    
    var orbitalPeriod = Math.round(
                              Math.sqrt(4 * 
                                Math.pow(Math.PI, 2) * 
                                Math.pow(radius, 3) / GM));
    return {
      name : element.name,
      orbitalPeriod : orbitalPeriod
    };
    
  });  
  
  return result;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]); 
