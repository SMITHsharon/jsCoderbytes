//For this challenge you will be capitalizing certain characters in a string.
function LetterCapitalize(str) { 

    var arrayStr = str.split(" ");
    var newArrayStr = [];
    
    for (var i=0; i<arrayStr.length; i++)
    {
        newArrayStr.push(arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].slice(1));
    }
    
    return newArrayStr.join(' '); 
}
   
// keep this function call here 
//FirstReverse(readline());
var testString = prompt("Enter string to be capped: ");
console.log("String :: ", testString);
console.log("capped string is :: ", LetterCapitalize(testString));
   
// keep this function call here 
LetterCapitalize(readline());


// other solutions
/*
function LetterCapitalize(str) { 

  wordarr = str.split(" ");
  
  for (var i = 0, n = wordarr.length; i < n; i++) {
   wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1); 
  }
  str = wordarr.join(" ");
  
  return str; 
         
}
*/


/*
function LetterCapitalize(str) { 

  // code goes here   
  return str.split(/s+/).map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');    
}
*/