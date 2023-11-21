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


export const transactionStates = {
  pending: "PENDING",
  successful: "SUCCESSFUL",
  failure: "FAILURE",
  canceled: "CANCELLED",
}

// transaction model
export function Transaction(id, amount, sender, reciever) {
  this.id = id;
  this.amount = amount;
  this.sender = sender
  this.reciever = reciever;
  this.date = new Date().toISOString();
  this.status = transactionStates.pending
}


export function TransactionLedger() {
  this.transactions = [];
}


TransactionLedger.prototype.addTransaction = function (transaction) {
  if (transaction instanceof Transaction) {
    this.transactions.push(transaction);
  }
  else {
    throw new Error("Transaction Type must be a Transaction");
  }
}


TransactionLedger.prototype.getSuccessfullTranasactions = function () {
  return this.transactions.filter(transaction => {
    if (transaction.status === transactionStates.successful) {
      return transaction;
    }
  })
}

function changeTransactionType(type) {
  var ObjectData = Object.keys(transactionStates);
  var fil = ObjectData.filter(data => transactionStates[data] === type);
  return fil.length > 0
}


Transaction.prototype.updateTransaction = function (type) {
  if (changeTransactionType(type)) {
    this.status = type;
  }
  else {
    throw new Error("Transaction Type Not matching");
  }
}

Transaction.prototype.addToLedger = function (ledger) {
  if (ledger instanceof TransactionLedger) {
    ledger.addTransaction(this);
  } else {
    throw new Error("Transaction Issue");
  }
}

// Execution Start

// var newLedger = new TransactionLedger();

// var transaction1 = new Transaction(1, 1000, "Balaji", "Chandru");

// var transaction2 = new Transaction(1, 1000, "Balaji", "Chandru");
// var transaction3 = new Transaction(1, 1000, "Balaji", "Chandru");

// transaction1.addToLedger(newLedger);
// transaction2.addToLedger(newLedger);
// transaction3.addToLedger(newLedger);
// transaction1.updateTransaction(transactionStates.successful);
// console.log("Before Updating 2")
// console.log(newLedger.getSuccessfullTranasactions())
// transaction2.updateTransaction(transactionStates.successful)
// console.log("After Updating 2")
// console.log(newLedger.getSuccessfullTranasactions())