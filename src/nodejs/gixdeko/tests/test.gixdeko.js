
var tool = require("../gixdeko");


var
    textDeco = "@v 1812090529 A Goal I have is to get out an Object I can publish and use from anywhere in the system helping consistency";


console.log("------------geto-------------------------");
console.log(tool.geto(textDeco));

console.log("-------------------------------------");
console.log("---------------xtro----------------------");
textDeco = `@v 1812090529 A Goal I have is to get out an Object I can publish and use from anywhere in the system helping consistency
@cr A related to previous reality...
@a 190113 do that....
@cr rel to do that    
`;
console.log(tool.xtro(textDeco));
console.log("-------------------------------------");
console.log("---------------xtro- with indent and no deco line---------------------");

textDeco = `@v 1812090529 A Goal I have is to get out an Object I can publish and use from anywhere in the system helping consistency
 @cr A related to previous reality...
@a 190113 do that....
 @cr rel to do that    
this line has nothing to it
`;
var dekoRes = tool.xtro(textDeco, "\n", false, true);

console.log("---------Use stringify------------");
console.log(
    JSON.stringify
        (dekoRes)

);
console.log("---------Use   dekoResultToJson------------");
console.log(
    tool.toJSON(dekoRes)

);
