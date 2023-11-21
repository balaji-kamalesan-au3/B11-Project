import { transactionStates } from "../Controller/controller"

export default function DisplayTransaction({ transactionLedger }) {
  return (
    <div>
      {transactionLedger.transactions.map(transaction => {
        return <div>
          <div>Transaction ID : {transaction.id}</div>
          <div>Amount : {transaction.amount}</div>
          <div>Sender: {transaction.sender}</div>
          <div>Reciever : {transaction.reciever}</div>
          <div>Status : {transaction.status}</div>
          <button disabled={transaction.status === transactionStates.successful} onClick={() => transaction.updateTransaction(transactionStates.successful)}>Approve Transaction</button>
          <button disabled={transaction.status === transactionStates.canceled} onClick={() => transaction.updateTransaction(transactionStates.canceled)}>Cancel Transaction</button>
          <hr />
        </div>
      })}
    </div>
  )
}