import React from 'react'
import './CommingSoonBottomNav.css'

const CommingSoonBottomNav = () => {
  return (
    <div className="bottomNav">
      <div className="left">
        <p>Follow Us & Get Update</p>
        <img src="/arrow-right-solid.svg" alt="" className="arrow" />
      </div>
      <div className="right">
        <img src="/instagram.svg" alt="" className="insta" />
        <img src="/threads.svg" alt="" className="threads" />
      </div>
    </div>
  )
}

export default CommingSoonBottomNav