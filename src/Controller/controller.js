// App => Banking application transfer money between users, account statement, amount can be added to account
//  User => User details, AccountDetails, Transaction Details
// Transaction Details => 2 USer details, 2 AccountDetails, Transaction Details

// User  => name, account Number, starting Balance, current Balance,transaction id
// transaction => transaction id, amount, sender, receiver, date, time
// userData = [user1, user2, user3, user4, user5, user6]
// transactionData = [transaction1, transaction2, transaction3, transaction4]

// var user = {
//   name: 'Entri-B11',
//   accountNumber: 123456789,
//   startingBalance: 10000,
//   currentBalance: 10000,
//   transactions: []
// }

// var transaction = {
//   id: 1,
//   amount: 1000,
//   sender: "Entri-B11",
//   reciever: "Entri-B10",
//   date: new Date()
// }

export function User(name, accountNumber, startingBalance, currentBalance) {
  this.name = name;
  this.accountNumber = accountNumber;
  this.startingBalance = startingBalance;
  this.currentBalance = currentBalance;
  this.transactions = []
}

export function UserLedger() {
  this.users = [];
}


User.prototype.creditBalance = function (amount) {
  if (amount > 0) {
    this.currentBalance = this.currentBalance + amount;
  }
  else {
    throw Error({ message: "Invalid amount" })
  }
  return "Amount Credited Successfully, Your Current Balance: " + this.currentBalance
}

UserLedger.prototype.addUser = function (user) {
  if (user instanceof User) {
    this.users.push(user);
  }
  else {
    throw Error({ message: "User type Wrong" })
  }
  return "User added Successfully"
}




