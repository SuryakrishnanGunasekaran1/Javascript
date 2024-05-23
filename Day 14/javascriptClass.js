class Payment
{
    balance = 11120.75
    constructor(accno,uid,pin,amt)
    {
            this.accno = accno
            this.uid = uid
            this.pin = pin
            this.amount = amt
            
            
    }

    Pay()
    {
        console.log(`${this.amount} has been debited to the account number ${this.accno}`)
    }
    Receipt()
    {
        this.balance -= this.amount
        console.log(`${this.amount} has been credited to the account ${this.accno}.Balance ${this.balance}`)

    }

    
}
p1 = new Payment(4444333221,6677889,9807,5000)

p1.Pay()
p1.Receipt()