export default function AddUser({ addUserForm, onFormChange, addUser }) {

  return (
    <div>
      <InputComponent
        type='text'
        value={addUserForm.name}
        onChange={(e) => onFormChange(e)}
        name="name"
        title="Account Holder Name"
        placeholder="Enter Account Holder Name"
      />
      <InputComponent
        type='number'
        value={addUserForm.number}
        onChange={(e) => onFormChange(e)}
        name="number"
        title="Account Holder Number"
        placeholder="Enter Account Holder Number"
      />
      <InputComponent
        type='number'
        value={addUserForm.startingBalance}
        onChange={(e) => onFormChange(e)}
        name="startingBalance"
        title="Starting Balance"
        placeholder="Enter Starting Balance"
      />

      <button onClick={() => addUser()} >Add User</button>
    </div>
  )
}


export function InputComponent({ type, name, value, onChange, title, placeholder }) {
  return (
    <div>
      <h3>{title}</h3>
      <input type={type} name={name} value={value} onChange={(e) => onChange(e)} placeholder={placeholder} />
    </div>
  )
}