import './style.css'

type InputDataType = {
    onChange: Function,
    placeholderText: string
}

function Input(props: InputDataType) {
  
    return (
      <>
        <input 
            type="text" 
            placeholder={props.placeholderText} 
            onChange={(e) => props.onChange(e.target.value)}
        />
      </>
    )
  }
  
export default Input