// function statement
function sum(x, y) {
    console.log("in sum");
    return x + y;
}
console.log("sum", sum(2, 3));
//function expression
var add = function (x, y) {
    console.log("in add");
    return x + y;
};
console.log("add", add(3, 4));
//arrow function
var calc = (x, y) => {
    console.log("in calc");
    return x + y;
};
console.log("calc", calc(6, 7));
calc = (x, y) => x * y;
console.log("calc", calc(6, 7));
var obj = {
    id: 100,
    print: function () {
        console.log("print: id", this.id);
        //setInterval
        setTimeout(function () {
            console.log("print in 1sec: id", this.id);
        }, 1000);
        setTimeout(() => {
            console.log("print in 1sec: id", this.id);
        }, 1000);
    }
};
obj.print();
