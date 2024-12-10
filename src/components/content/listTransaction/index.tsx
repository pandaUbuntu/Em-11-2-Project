import './style.css'
import { getTransactionsFullData, TransactionFullData } from '../../../services/TransactionHelper'
import Row from '../row'


type ListTransactionProps ={
  transactions: TransactionFullData[],
  removeTransaction: (id:number) => void
}

function ListTransaction(props:ListTransactionProps) {
    console.log(getTransactionsFullData());

    return (
        <div className="list-transaction-wrapper">
          {
            props.transactions.map((transaction) => 
            <Row 
              key={transaction.id}
              transaction={transaction}
              handleDelete={props.removeTransaction}
            />)
          }
        </div>
    )
  }
  
export default ListTransaction
