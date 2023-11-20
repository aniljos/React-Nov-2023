import twoObj from './two.js';
console.log("in module main.ts");
function process() {
    console.log("in process of main module");
}
twoObj.process();
process();
