import React from 'react'
import CommingSoonNavBar from './components/CommingSoonNavBar'
import CommingSoonMainText from './components/CommingSoonMainText'
import CommingSoonBottomNav from './components/CommingSoonBottomNav'
import '../commingsoon/CommingSoonContents.css'

const CommingSoonContents = () => {
  return (
    <>
      <div className="content">
        <CommingSoonNavBar/>
        <CommingSoonMainText/>
        <CommingSoonBottomNav/>
      </div>
    </>
  )
}

export default CommingSoonContents