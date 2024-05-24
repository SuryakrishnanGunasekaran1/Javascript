class iBank
{
    
    static amount =2000
    constructor(otpNo,pinNo)
    {
        this.otpNo =otpNo
        this.pinNo =pinNo
        this.transac()
    }
    transac()
    {
        
        if(this.otpNo == 4567)
            {
                if(this.pinNo == 8908)
                    {
                        console.log("payment has been completed")
                        
                        this.print();
                    }
            }
      
    }

    print()
    {
        console.log(`${iBank.amount} has been debited`);
    }



}
ob1 = new iBank(4567,8908)

