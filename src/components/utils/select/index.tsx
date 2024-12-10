import './style.css'

type SelectProps<T> = {
    options: T[],
    getOptionName: (option: T) => string,
    getOptionId: (option: T) => string,
    onChange: (value: string) => void
}

function CustomSelect<T>(props: SelectProps<T>) {
  
    return (
        <select className="custom-select" onChange={(event) => props.onChange(event.target.value)}>
            {
                props.options.map((option:T, index) => (
                    <option key={index} value={props.getOptionId(option)}>{props.getOptionName(option)}</option>
                ))
            }
        </select>
    )
  }
  
export default CustomSelect
