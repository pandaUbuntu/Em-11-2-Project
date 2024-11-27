import './style.css'
import { ButtonType } from '../../../types/types'

function CreateButton(props: ButtonType) {
  
    return (
      <>
        <button onClick={props.handleClick}>Create</button>
      </>
    )
  }
  
export default CreateButton