class Employee{

    //Data Members
    id: number;
    name: string;
    private _location: string;

    //multiple constructor declartions
    constructor();
    constructor(id: number, name: string);
    constructor(id: number, name: string, location: string);

    //one implementation
    constructor(id?: number, name?: string, location?: string){

        this.id = id;
        this._location = location;
        this.name = name;
    }

    public get location(){
        return this._location;
    }
    public set location(location){
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

