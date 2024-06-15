import { useState } from 'react'
 import Dictionary from './Components/Dictionary'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dictionary/>
    </>
  )
}

export default App
