//method 1
const bank = {}
bank.acc = 78696541334
bank.accname = "adam"
bank.branch = "chennai"

console.log(bank)

//method 2
const person = new Object();


person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person)
// method 3
const car = new Object()

Object.assign(car)
car.model = "verdon"
car.company = "bucati"
car.color = "blue"
car.maxspeed = "425kmph"
console.log(car)
// method 4
const emp = new Object()
ob = Object.create(emp)
ob.name = "jack"
ob.id = 8899
ob.desig = "Admin"
//
y = Object.entries(ob)
console.log(ob)
 x = Object.fromEntries(y)
console.log(x)
vob = Object.values(x)
kob = Object.keys(x)
console.log(vob + "\n" + kob)


function man(name, age, degree,) {
    this.Name = name;
    this.age = age;
    this.degree = degree;
    this.job 
  }
  
  man.prototype.job = "bank officer"

  man.prototype.native = function() {
    return this.native="chennai" ;
  };

const x1 = new man("adam",34,"BE")
console.log(x1.native())
console.log(x1.job)
console.log(x1)
