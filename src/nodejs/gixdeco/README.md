# gixstr
@stcgoal A package to do something with Strings


//test
var s = require("../gixstr.js");
var mystr = "abcdefgab and more abc and even more abcd;";

console.log(mystr.contains("abc"));
console.log(mystr.contains("aa"));

var tstReplace = mystr.replace("ab", "AB");
console.log(tstReplace);

tstReplace = mystr.replaceAll("ab", "AB");
console.log(tstReplace);

//require("../gixstr");

var myString = "MooAbcd";
// Usage
if (myString.startsWith("Moo")) {
  // ...
  console.log("Mooo");
} else {
  console.log("NOTMooo");
}

