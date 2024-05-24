
const Bank1 = {
    accountHolder : "Adam",
    accountNo : 555554444333221,
    mobileNo : 9876543210,
    aadharNo : 879054672143,
    addressDetails : "No 1,Royal Garden,Meyyanur Main road,Salem",
    Branch : "Salem"
}


const Bank2 ={
    accountHolder: "braden",
    accountNo : 339987654,
    mobileNo : 9876543211,
    aadharNo :687624353124,
    addressDetails : 'chennai',
    Branch :'chennai',
}
// assign
Object.assign(Bank1,Bank2)
//console.log(Bank1)
//console.log(Bank1.aadharNo)
//console.log(Bank1.accountHolder)

// create
const Bank3 = Object.create(Bank2);
Bank3.accountHolder ="morgan"
Bank3.accountNo = 323245456776
Bank3.mobileNo = 9876987654
Bank3.aadharNo =75655348999
Bank3.addressDetails ='cuddalore'
Bank3.Branch = "chennai"
console.log(Bank3)
const Bank4 = {}
Bank4.accountHolder = "bruce"
//entries
let x = Object.entries(Bank1)
/*
for(let i=0;i<x.length;i++)
    {
        console.log(x[i])
    }
*/
console.log(x)
//from entries
let y = Object.fromEntries(x)
console.log(y)
//object keys and values
console.log(Object.keys(Bank1))
console.log(Object.values(Bank1))
//sealed
Object.seal(Bank3)
Bank3.Branch="madurai"
Bank3.ifsc = 'hdfc90000'
delete Bank3.mobileNo
console.log(Bank3)

//freeze u cannot do anything
Object.freeze(Bank2)
Bank2.Branch="madurai"
Bank2.ifsc = 'hdfc90000'
delete Bank2.mobileNo
console.log(Bank2)
 
//preventExtentions u can delete , modify but donot modify
Object.preventExtensions(Bank1)
Bank1.Branch="madurai"
Bank1.ifsc = 'hdfc90000'
delete Bank1.mobileNo
console.log(Bank1)
console.log(Object.isSealed(Bank3))//true
console.log(Object.isExtensible(Bank1))//false
console.log(Object.isFrozen(Bank2))//true
console.log(Object.isExtensible(Bank4))//true
