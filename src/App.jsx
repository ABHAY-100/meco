import { useState } from 'react'
import './App.css'
import CommingSoon from './pages/CommingSoon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < CommingSoon />
    </>
  )
}

export default App
