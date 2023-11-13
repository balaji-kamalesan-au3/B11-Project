import { useEffect, useState } from "react"
import AddUser from "./AddUser"
import DisplayUser from "./DisplayUser"
import { User, UserLedger } from "../Controller/controller"

const components = {
  addUser: "ADD USER",
  displayUser: "DISPLAY USER"
}

export default function MainComponent() {
  const [activeComponent, setActiveComponent] = useState(components.addUser)
  const [userLedger, setUserLedger] = useState(new UserLedger())
  const [addUserForm, setAddUserform] = useState({
    name: "",
    number: 0,
    startingBalance: 0,
    currentBalance: 0
  })

  function changeActiveComponent(comp) {
    setActiveComponent(comp)
  }

  function formChange(e) {
    console.log("executed")
    var tempObject = { ...addUserForm, [e.target.name]: e.target.value };
    setAddUserform(tempObject)
  }

  function addUser() {
    const user = new User(addUserForm.name, addUserForm.number, addUserForm.startingBalance, addUserForm.startingBalance)
    userLedger.addUser(user);
    console.log(userLedger)
    setUserLedger(userLedger);
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
    </div>
    <div style={{ border: "1px solid black", minHeight: "500px", width: "100%" }}>
      {activeComponent === components.addUser && <AddUser addUserForm={addUserForm} onFormChange={formChange} addUser={() => addUser()} />}
      {activeComponent === components.displayUser && <DisplayUser userLedger={userLedger} />}
    </div>

  </div>)
}