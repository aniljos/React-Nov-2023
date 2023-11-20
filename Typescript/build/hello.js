console.log("Hello Typescript");
var x = 10; // Type inference
//x = "abc"; //Type-checking
var y; // Inferered to be of type "any"
y = 200;
y = "abc";
var z; // Type annotation
z = 100;
//z = "test" // compiler error
