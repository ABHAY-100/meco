import React from 'react'
import ComingSoonNavBar from './components/ComingSoonNavBar'
import ComingSoonMainText from './components/ComingSoonMainText'
import ComingSoonBottomNav from './components/ComingSoonBottomNav'
import './ComingSoonContents.css'
import ComingSoonBG from './components/ComingSoonBG'

const ComingSoonContents = () => {
  return (
    <>
      <div className="content">
        <ComingSoonNavBar />
        <ComingSoonMainText />
        <ComingSoonBottomNav />
        <ComingSoonBG />
      </div>
    </>
  )
}

export default ComingSoonContents