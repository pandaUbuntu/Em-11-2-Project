import CategoryList from './categoryList'
import CreateCategory from './createCategory'
import './style.css'
import { CategoryType } from '../../types/types'
import { useState } from 'react'
import { getCategory } from '../../services/CategoryHelper'

function Sidebar() {
    const [categoryList, addCategory] = useState<CategoryType[]>(getCategory())

    const handleAddCategory = ():void => {
        addCategory(getCategory())
    }

    return (
      <div className="sidebar-wrapper gray-border">
        <h2>Category</h2>
        <CreateCategory handleAddCategory={handleAddCategory}/>
        <CategoryList onRendered={handleAddCategory} list={categoryList} />
      </div>
    )
  }
  
export default Sidebar
