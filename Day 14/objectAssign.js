const Bank = {
    accountHolder: null,
    accountNo : null,
    mobileNo : null,
    aadharNo :null,
    addressDetails : null,
    Branch :null,
}
Object.assign(Bank)
Bank.accountHolder = "Adam"
Bank.accountNo = 555554444333221
Bank.mobileNo = 9876543210
Bank.aadharNo = 879054672143
Bank.addressDetails = "No 1,Royal Garden,Meyyanur Main road,Salem"
Bank.Branch = "Salem"
console.log(Bank.aadharNo)
console.log(Bank.accountHolder)
//entries method
console.log(Object.entries(Bank))
console.log(Object.keys(Bank))
console.log(Object.values(Bank))
