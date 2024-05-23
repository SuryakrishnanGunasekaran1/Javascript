const Employee = {
    Ename:"Adam",
    Eid : 8890,
    Email : "adam@gmail.com",
    Design : "TeamLead",
    Branch :"Banglore"
}

let emp1 = Employee
//freeze method
Object.freeze(emp1)
emp1.Ename = "bolt"
console.log(emp1)
// assign method
Object.assign(emp1)
Ename = "Clint"
Design = "HR"
console.log(Ename)
console.log(emp1)
//entries method
let x = Object.entries(emp1)
//fromEntries method
console.log(x)
 y = Object.fromEntries(x)
console.log(y)
//object.values Methods return 1D array
console.log(Object.values(Employee))
