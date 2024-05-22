let character = {
    Name : "steve rogers",
    Age: function()
    {
        let curage = new Date().getFullYear()
         let age = curage - this.dob
        return age
    },
    Strength:null,
    Worthyness :null

}
let s1 = Object.create(character)
s1.dob = 1941
s1.Strength = "Hands on Hands skilled fighter"
s1.Worthyness ="Able to lift mjolnir"
console.log(s1.Name)
console.log(s1.Age())
console.log(s1.Strength)
console.log(s1.Worthyness)

let s2 = Object.create(character)
s2.Name = "stark"
s2.dob = 1972
s2.Strength = "knowledge"
s2.Worthyness = "he has a heart"
console.log(s2.Name)
console.log(s2.dob)
console.log(s2.Strength)
console.log(s2.Worthyness)