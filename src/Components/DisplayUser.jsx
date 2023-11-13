export default function DisplayUser({ userLedger }) {
  return (
    <div>
      {userLedger.users.map(user => {
        return <div>
          <div>Account Holder Name : {user.name}</div>
          <div>Account Number : {user.accountNumber}</div>
          <div>Account Starting Balance : {user.startingBalance}</div>
          <div>Account Current Balance : {user.currentBalance}</div>
          <hr />
        </div>
      })}
    </div>
  )
}