import { TransactionFullData } from '../../../services/TransactionHelper'
import DeleteButton from '../../utils/deleteButton'
import './style.css'

type TransactionRowProps={
  transaction: TransactionFullData,
  handleDelete: (id: number) => void,
}

function Row(props: TransactionRowProps) {
  
    const handle:React.MouseEventHandler<HTMLButtonElement> = (event:React.MouseEvent) => {
      event.preventDefault();
      props.handleDelete(props.transaction.id);
    }

    return (
        <div className={`transaction-row-wrapper ${props.transaction.typeId === 1 ? 'income-color' : 'expense-color'}` }>
          <span>{props.transaction.categoryName}</span>
          <span>{props.transaction.typeName}</span>
          <span>{props.transaction.value}</span>
          <DeleteButton handleDelete={handle} catagoryName='123'/>
        </div>
    )
  }
  
export default Row
