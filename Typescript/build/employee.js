class Employee {
    //one implementation
    constructor(id, name, location) {
        this.id = id;
        this._location = location;
        this.name = name;
    }
    get location() {
        return this._location;
    }
    set location(location) {
        this._location = location;
    }
}
var emp = new Employee();
console.log("emp", emp);
var emp1 = new Employee(1, "Anil");
console.log("emp1", emp1);
var emp2 = new Employee(2, "Vijay", "Mumbai");
console.log("emp2", emp2);
emp.location = "Mumbai";
console.log("emp.location", emp.location);
