let BankLogin ={
    userId : "sury@",
    password : "12345",
    confirmPassword : "12345",
    enterOtp:function()
    {
        return (otp.pnum)
    }
}

let otp ={
    phone:9887766554,
    pnum :8899 
}

let res = BankLogin.enterOtp.bind(otp)

console.log(res())
// console.log(otp.pnum == res())
function check() 
{
    if(otp.pnum == res()) 
    {
        console.log("your otp has been validated")

    }
    else
    console.log("invalid otp")
 }
check()
