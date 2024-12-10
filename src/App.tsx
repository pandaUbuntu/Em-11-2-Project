import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Content from './components/content'
import { calculateBudget } from './services/TransactionHelper'

function App() {
  const [budgetValue, setBudgetValue] = useState(calculateBudget())

  const setBudget = () => {
    setBudgetValue(calculateBudget())
  }

  return (
    <div className='main'>
      <Header userName='Test' budgetValue={budgetValue}/>
      <div className='budget-container'>
        <Sidebar />
        <Content calculate={setBudget}/>
      </div>  
  
    </div>
  )
}

export default App
