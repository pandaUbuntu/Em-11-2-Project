import './style.css'


type HeaderInfoType = {
    userName: string,
    budgetValue: number,
}
function Header(props: HeaderInfoType) {
  
    return (
        <div className="header-wrapper gray-border">
            <div>
                <p>Hello {props.userName}</p>
            </div>
            <div>
                <p>Your budget: ${props.budgetValue}</p>
            </div>
        </div>
    )
  }
  
export default Header
