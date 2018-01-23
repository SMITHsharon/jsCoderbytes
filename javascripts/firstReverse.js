// function reverses (returns) all the characters in the given string (str)
function FirstReverse(str) { 

  var splitStr = str.split("");
  var strLength = splitStr.length-1;
  var tempChar;
  var j = strLength;
  
  for (var i=0 ; i < strLength / 2 ; i++)
  {
      tempChar = splitStr[i];
      splitStr[i] = splitStr[j];
      splitStr[j] = tempChar;
      j--;
  }
  
  return splitStr.join('');
         
}
   
// keep this function call here 
//FirstReverse(readline());
var testString = prompt("Enter string to be reversed: ");
console.log("String :: ", testString);
console.log("reversed string is :: ", FirstReverse(testString));