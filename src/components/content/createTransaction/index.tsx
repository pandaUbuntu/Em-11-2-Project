import { CategoryType } from '../../../types/types'
import { getCategory } from '../../../services/CategoryHelper'
import { typeData } from '../../../services/TypeHelper';
import { Transaction } from '../../../services/TransactionHelper';
import './style.css'
import CustomSelect from '../../utils/select';
import Input from '../../utils/input';
import CreateButton from '../../utils/createButton';

type CreateTransactionProps = {
    addTransaction: (transaction:Transaction) => void, 
}

function CreateTransaction(props: CreateTransactionProps) {
    const categoryList:CategoryType[] = getCategory();
    console.log(categoryList);
    let valueTransaction:number = 0;
    let categortId:string = categoryList[0].id.toString();
    let typeId:string = "1";
    
    const handleInputChange:Function = (value: number):void => {
        valueTransaction = value;
    }

    const handle:React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent) => {
        event.preventDefault();
        const transaction:Transaction = {
            value: valueTransaction,
            categoryId: parseInt(categortId),
            typeId: parseInt(typeId),
            id: Math.floor(Math.random() * 1000)
        }

        props.addTransaction(transaction);
    }


    return (
        <div>
            <div>
                <h2>Create Transaction</h2>
                <CustomSelect 
                    options={categoryList}  
                    getOptionId={(catagory)=> catagory.id.toString()}
                    getOptionName={(catagory)=> catagory.name}
                    onChange={(value) => categortId = value}
                    />

                <CustomSelect 
                    options={typeData}   
                    getOptionId={(type)=> type.id}
                    getOptionName={(type)=> type.name}
                    onChange={(value) => typeId = value}
                    />
    
                <Input onChange={handleInputChange} placeholderText='Write value'/>
            </div>
            <div>
                <CreateButton handleClick={handle} />
            </div>
        </div>
    )
  }
  
export default CreateTransaction
