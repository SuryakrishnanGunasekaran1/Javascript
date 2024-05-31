amount = 5000.43;
let BalanceCheck =
{
    AccountNo: 555666666777,
    Bank:"hdfc",
    phoneNo:9887766578,
    Balance:amount,
    check:function()
    {
        
        return PasswordCheck.PinNo
    }
}

let PasswordCheck = 
{
    PinNo :765432
}

//doesnot return a function
let BC = BalanceCheck.check.call(PasswordCheck)
console.log(BC)
console.log("pin acepted")

Validate =()=>{
    if(PasswordCheck.PinNo == BC)
        {
            console.log(BalanceCheck.Bank)
            console.log(BalanceCheck.Balance)
        }
        else
        {
            console.log("enter correct pin, try again")
        }
}
setTimeout(Validate,2000)

