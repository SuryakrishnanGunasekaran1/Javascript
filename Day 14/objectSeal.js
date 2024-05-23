const Payment = {
        userId : 44433210,
        Pin : 7798,
        }

        Object.seal(Payment)
        Payment.userId = 438973874
        delete Payment.Pin
        Object.assign(Payment)
        Payment.amount = 4000
        console.log(Payment)