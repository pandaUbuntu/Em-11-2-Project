import './style.css'
import CategoryRow from './row'
import { CategoryType } from '../../../types/types'

type CategoryListType = {
  list: CategoryType[],
  onRendered: () => void,
}

function CategoryList(props:CategoryListType) {
  
    return (
      <div className="sidebar-list-wrapper">
        <h2>List</h2>
        {
          props.list.length > 0 ? props.list.map((value:CategoryType) => { return <CategoryRow onRendered={props.onRendered} key={value.id} {...value}/>}) : <p>Category list is empty</p>
        }
      </div>
    )
  }
  
export default CategoryList
