import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Content from './components/content'

function App() {
  const [budgetValue, setBudgetValue] = useState(0)
  localStorage.setItem('categories', JSON.stringify([]));

  return (
    <div className='main'>
      <Header userName='Test' budgetValue={budgetValue}/>
      <div className='budget-container'>
        <Sidebar />
        <Content />
      </div>  
  
    </div>
  )
}

export default App
