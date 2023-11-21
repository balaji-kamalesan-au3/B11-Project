import { useEffect, useState } from "react"
import AddUser from "./AddUser"
import DisplayUser from "./DisplayUser"
import { Transaction, TransactionLedger, User, UserLedger, transactionStates } from "../Controller/controller"
import MakeTransaction from "./MakeTransaction"
import DisplayTransaction from "./ShowTransaction"

const components = {
  addUser: "ADD USER",
  displayUser: "DISPLAY USER",
  makeTransaction : "MAKE TRANSACTION",
  showTransaction: "SHOW TRANSACTION"
}

export default function MainComponent() {
  const [activeComponent, setActiveComponent] = useState(components.addUser)
  const [userLedger, setUserLedger] = useState(new UserLedger())

  const [transactionLedger, setTransactionLedger] = useState(new TransactionLedger());
  const [addUserForm, setAddUserform] = useState({
    name: "",
    number: 0,
    startingBalance: 0,
    currentBalance: 0
  })
  const [transactionState, setMakeTransaction] = useState({
    id : "",
    amount : 0,
    sender : "",
    reciever : "",
    date : new Date().toISOString,
    status : transactionStates.pending
  })

  function changeActiveComponent(comp) {
    setActiveComponent(comp)
  }

  function formChange(e) {
    var tempObject = { ...addUserForm, [e.target.name]: e.target.value };
    setAddUserform(tempObject)
  }
  function transactionFormChange(e) {
    var tempObject = { ...transactionState, [e.target.name]: e.target.value };
    setMakeTransaction(tempObject)
  }

  function addUser() {
    const user = new User(addUserForm.name, addUserForm.number, addUserForm.startingBalance, addUserForm.startingBalance)
    userLedger.addUser(user);
    console.log(userLedger)
    setUserLedger(userLedger);
  }
  function makeTransaction() {
    const transaction = new Transaction(transactionState.id,transactionState.amount,transactionState.sender,transactionState.reciever)
    transaction.addToLedger(transactionLedger)
    console.log(transactionLedger)
  }

  useEffect(() => {
    console.log(userLedger)
  }, [userLedger])

  return (<div style={{ margin: "5% 10%" }}>
    <h1 style={{ textAlign: "center" }} >Entri Bank - B11 Branch</h1>
    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
      <button style={{ margin: "2% 3%" }}
        onClick={() => changeActiveComponent(components.addUser)}
      >Add User</button>
      <button style={{ margin: "2% 3%" }}
        onClick={() => changeActiveComponent(components.displayUser)}
      >Display User</button>
      <button style={{ margin: "2% 3%" }}
        onClick={() => changeActiveComponent(components.makeTransaction)}
      >Make Transaction</button>
      <button style={{ margin: "2% 3%" }}
        onClick={() => changeActiveComponent(components.showTransaction)}
      >Show Transaction</button>
    </div>
    <div style={{ border: "1px solid black", minHeight: "500px", width: "100%" }}>
      {activeComponent === components.addUser && <AddUser addUserForm={addUserForm} onFormChange={formChange} addUser={() => addUser()} />}
      {activeComponent === components.displayUser && <DisplayUser userLedger={userLedger} />}
      {activeComponent === components.makeTransaction && <MakeTransaction transactionForm={transactionState} onFormChange={transactionFormChange} onButtonClick={makeTransaction} />}
      {activeComponent === components.showTransaction && <DisplayTransaction transactionLedger={transactionLedger} />}
    </div>

  </div>)
}