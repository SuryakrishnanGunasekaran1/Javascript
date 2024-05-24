function Bank (customer, balance, amount, withdraw) {

    this.customer = customer;
    this.balance = balance;
    this.amount = amount;
    this.withdraw = withdraw;

    this.currentCustomers = {
      account: 0

    },

    this.printAccount = function () {
    return `${this.customer}'s new balance is ${this.balance}`;
    },

    this.deposit = function () {
      return `${this.customer}'s new balance is ${balance + this.amount}`;
    },

    

    this.withdraw = function () {
      if(this.balance < this.withdraw) {
        throw "Warning! Insufficient funds!";
      } else {
      return `${this.customer}'s new balance is ${balance - withdraw}`;
     }
    }

  }
  

  const newBank = new Bank('Logan',1000,0,500);
  console.log(newBank.customer);
  console.log(newBank.printAccount());
  console.log(newBank.deposit());
  console.log(newBank.withdraw());

