//named import 
import {addOne} from './one.js';

console.log("in module two.ts");


function process(){

    console.log("in process of module two")
    addOne(2, 3);
}

function doWork(){

}

export default {process, doWork};