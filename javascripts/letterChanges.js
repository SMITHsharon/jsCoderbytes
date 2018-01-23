// fumction shifts every character in given string to the next alpha character ;
// shifts a => z ;
// and caplitalizes all the vowels
function LetterChanges(str) { 

  var shiftedStr = str.replace(/[a-z]/gi, function(char) {
      return (char === 'z' || char === 'Z') ? 'A' : String.fromCharCode(char.charCodeAt() + 1);
  });
  
  var capVowels = shiftedStr.replace(/e|i|o|u/gi, function(vowel) {
      return vowel.toUpperCase();
  });
  
  return capVowels; 
         
}
   
// keep this function call here 
//LetterChanges(readline());
var testString = prompt("Enter string for letter shifts: ");
console.log("String :: ", testString);
console.log("shifted string :: ", LetterChanges(testString));