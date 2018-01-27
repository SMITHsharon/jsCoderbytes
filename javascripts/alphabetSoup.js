// alphabetize the given input string
function AlphabetSoup(str) { 

  var strArray = str.split("");
  for (var i=0; i < strArray.length; i++)
  {
      var tempChar;
      for (var j=0; j<strArray.length; j++)
      {
          if (strArray[i] < strArray[j])
          {
              tempChar = strArray[j];
              strArray[j] = strArray[i];
              strArray[i] = tempChar;
          }
      }
  }
  return strArray.join(""); 
}
   
// keep this function call here 
//AlphabetSoup(readline());
var alphaString = prompt("Enter string to be alphabetized: ");
console.log("Apha String :: ", alphaString);
console.log("alpha string is :: ", AlphabetSoup(alphaString));


/* using built-in
function AlphabetSoup(str) { 

var arrays = str.split("");
var reversearrays = arrays.sort();
var result = reversearrays.join(""); 
return result; 
}
*/

/*
function AlphabetSoup(str) { 
    return str.split("").sort().join("")
}
*/

