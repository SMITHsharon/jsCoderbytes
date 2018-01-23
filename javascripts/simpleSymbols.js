//For this challenge you will be determining whether or not certain characters are in correct positions.
function SimpleSymbols(str) { 

  var code;
  var stringValid = true;

  for (i = 0; i < str.length - 1; i++) 
  {
    code = str.charCodeAt(i);
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) // upper or lower alpha (A-Z || a-z)
    { 
        if ( (i === 0) || (i === str.length - 1) ) 
        {
            stringValid = false;
            i = str.length;
        }
        else if ( (str.charAt(i - 1) == "+") && (str.charAt(i + 1) == "+") )
        {
          stringValid = true;
        }
        else
        {
            stringValid = false;
            i = str.length;
        }
    }
  }
  return stringValid;
}
   
// keep this function call here 
//SimpleSymbols(readline());
var testString = prompt("Enter string for testing: ");
console.log("String :: ", testString);
console.log("tested string for validity:: ", SimpleSymbols(testString));
   
// keep this function call here 
SimpleSymbols(readline());



// better
/*
function SimpleSymbols(str) { 

  if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
      return false;
  }
  else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
      return false;
  }
  else {
   return true; 
  }
}
*/


/*
function SimpleSymbols(str) { 
    if(str.charAt(0).match(/[a-z]/i)) return false;
    if(str.charAt(str.length-1).match(/[a-z]/i)) return false;
for (j=1;j<str.length;j++){
    if(str.charAt(j).match(/[a-z]/i) && (str.substr(j-1,1) != "+" || str.substr(j+1,1) != "+") )
        return false;
    }
    return true;
}
*/