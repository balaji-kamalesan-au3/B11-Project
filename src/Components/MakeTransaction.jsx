import { InputComponent } from "./AddUser";

export default function MakeTransaction({ transactionForm, onFormChange, onButtonClick }) {

  return (
    <div>
      <InputComponent
        type='text'
        value={transactionForm.id}
        onChange={(e) => onFormChange(e)}
        name="id"
        title="Transaction ID"
        placeholder="Enter Transaction ID"
      />
      <InputComponent
        type='number'
        value={transactionForm.amount}
        onChange={(e) => onFormChange(e)}
        name="amount"
        title="Enter Amount"
        placeholder="Enter Transaction Amount"
      />
      <InputComponent
        type='string'
        value={transactionForm.sender}
        onChange={(e) => onFormChange(e)}
        name="sender"
        title="Transaction Sender"
        placeholder="Enter Sender"
      />
      <InputComponent
        type='string'
        value={transactionForm.reciever}
        onChange={(e) => onFormChange(e)}
        name="reciever"
        title="Transaction Reciever"
        placeholder="Enter Reciever"
      />

      <button onClick={onButtonClick} >Make Transaction</button>
    </div>
  )
}