import React from 'react'
import ComingSoonNavBar from './components/ComingSoonNavBar'
import ComingSoonMainText from './components/ComingSoonMainText'
import ComingSoonBottomNav from './components/ComingSoonBottomNav'
import './ComingSoonContents.css'

const ComingSoonContents = () => {
  return (
    <>
      <div className="content">
        <ComingSoonNavBar />
        <ComingSoonMainText />
        <ComingSoonBottomNav />
      </div>
    </>
  )
}

export default ComingSoonContents