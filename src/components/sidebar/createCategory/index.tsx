import CreateButton from '../../utils/createButton'
import Input from '../../utils/input'
import React, { useState } from 'react'
import './style.css'
import { CategoryType } from '../../../types/types';

function CreateCategory() {
    const [inputValue, setInputValue] = useState("");

    const handle:React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent) => {
        if(inputValue.length === 0) {

        }
        else {
            const newCategory:CategoryType = {
                id: Math.random(),
                name: inputValue
            }
    
            let str:any = localStorage.getItem('categories');
            if (str != null){
                const list:CategoryType[] = JSON.parse(str);
                list.push(newCategory);
                localStorage.setItem('categories', JSON.stringify(list));
            }
        }
        
        console.log(localStorage.getItem('categories'));
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