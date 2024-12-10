import DeleteButton from '../../../utils/deleteButton'
import { deleteCategory } from '../../../../services/CategoryHelper'
import './style.css'

type CategoryRowType = {
    name: string
    id: number
    onRendered: () => void,
}

function CategoryRow(props:CategoryRowType) {

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      deleteCategory(props.id)
      props.onRendered()
    }
  
    return (
      <p className='category-row'>{props.name} <DeleteButton catagoryName={props.name} handleDelete={handleDelete}/></p>
    )
  }
  
export default CategoryRow