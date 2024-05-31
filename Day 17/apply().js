let account1 = 
{
    accountNo : 777666888999,
    bank : "HDFC Bank",
    balance : 3000
  
}
let account2 = 

{
    accountNo : 445566778899,
    bank : "AXIS Bank",
    balance : null,
    amountTransfer:function (da,ba)
    { 
         return account1.balance +" "+ da +" "+ ba
    }
    
}

let t = account2.amountTransfer.apply(account1,["Debited 3000","Balance 3000"])

console.log("amount transfered from account1 -",t)