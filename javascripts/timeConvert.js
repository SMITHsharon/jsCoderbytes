// For this challenge you will be determining the difference in hours and minutes between two given times.
function TimeConvert(num) { 

  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes; 
}
   
// keep this function call here 
//TimeConvert(readline());
var timeNumber = prompt("Enter number to convert to time: ");
console.log("Number to convert :: ", timeNumber, " => ", TimeConvert(timeNumber));

// cleaner
/* 
function TimeConvert(num) { 

  // code goes here  
  return Math.floor(num / 60) + ':' + (num % 60);
         
}
*/