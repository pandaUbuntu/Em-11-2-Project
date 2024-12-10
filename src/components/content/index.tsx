import { useState } from 'react';
import CreateTransaction from './createTransaction'
import ListTransaction from './listTransaction'
import { getTransactionsFullData, Transaction, createTransaction, deleteTransaction } from '../../services/TransactionHelper';
import './style.css'

type ContentProps ={
  calculate: () => void
}

function Content(props:ContentProps) {
  const [transactions, setTransaction] = useState(getTransactionsFullData());
  
  function addTransaction(transaction: Transaction){
    createTransaction(transaction);
    setTransaction(getTransactionsFullData());
    props.calculate();
  }

  function removeTransaction(id:number){
    deleteTransaction(id)
    setTransaction(getTransactionsFullData());
    props.calculate();
  }

    return (
        <div className="content-wrapper gray-border">
          <CreateTransaction  addTransaction={addTransaction}/>
          <ListTransaction 
            transactions={transactions} 
            removeTransaction={removeTransaction}
            />
        </div>
    )
  }
  
export default Content
