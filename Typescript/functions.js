//global scope ==> global object==> window

function test(){
    console.log("in test noargs");
}
// implicits args => this, arguments
function test(a, b){
    console.log("in test", arguments);
}



window.test(2,3);
test();
test(2,3,4,5);