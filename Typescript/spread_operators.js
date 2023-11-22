var numbers = [1,2,3];

var copy_of_numbers = [ ...numbers];
console.log("numbers", numbers);
console.log("copy_of_numbers", copy_of_numbers);

numbers.push(10);

console.log("numbers", numbers);
console.log("copy_of_numbers", copy_of_numbers);

const merge_copy = [...numbers, 15, 16, 17, ...numbers]
console.log("merge_copy", merge_copy);

var user = {id: 1, name: "Anil", location: "Hyd"};
var copy = {...user, location: "Blr"};

console.log("user", user);
console.log("copy", copy);
