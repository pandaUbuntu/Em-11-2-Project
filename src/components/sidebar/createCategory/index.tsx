import CreateButton from '../../utils/createButton'
import Input from '../../utils/input'
import React, { useState } from 'react'
import './style.css'
import { createCategory } from '../../../services/CategoryHelper'

type CreateCategoryType = {
  handleAddCategory: () => void,
}

function CreateCategory(props:CreateCategoryType) {
    const [inputValue, setInputValue] = useState("");

    const handle:React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent) => {
        if(inputValue.trim().length === 0) {
            throw new Error("Please write a valid category name");
        }
        createCategory(inputValue);
        props.handleAddCategory();
    }

    const handleInputChange:Function = (value: string):void => {
        setInputValue(value)
    }
    

    return (
      <div>
        <div>
            <Input onChange={handleInputChange} placeholderText='Write category name' />
        </div>
        <div>
            <CreateButton handleClick={handle} />
        </div>
      </div>
    )
  }
  
export default CreateCategory