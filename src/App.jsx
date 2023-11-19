import { useState } from 'react'
import './App.css'
import CommingSoon from './pages/CommingSoon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < CommingSoon />
      {/* This is the current developed page */}
    </>
  )
}

export default App
