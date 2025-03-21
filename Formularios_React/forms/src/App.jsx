import { useState } from 'react'
import MyForms from './assets/components/Myforms'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Forms</h2>
      <MyForms user={{name: "Josias", email:"Josias@gmail.com", bio:"Sou um advogado", role:"tester"}} />
    </>
  )
}

export default App
