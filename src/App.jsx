import { useState } from 'react'
import './App.css'
import './index.css';
import ComingSoon from './pages/comingsoon/ComingSoon'
import Loading from './pages/loading/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComingSoon />
      {/* <Loading /> */} {/* In Progress; remove the comment while start of work */}
    </>
  )
}

export default App
