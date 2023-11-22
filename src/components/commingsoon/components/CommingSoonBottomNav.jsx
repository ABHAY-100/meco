import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import './CommingSoonBottomNav.css'

const CommingSoonBottomNav = () => {
  return (
    <div className="bottomNav">
      <div className="left">
        <p>Follow Us & Get Update</p>
        <FaArrowRight className="arrow" style={{ color: '#ffffff' }} />
      </div>
      <div className="right">
        <a href="https://www.threads.net/@meco.app" target='blank'><FaThreads className="threads" style={{ color: '#ffffff' }} /></a>
        <a href="https://www.instagram.com/meco.app/" target='blank'><FaInstagram className='insta' style={{ color: '#ffffff' }} /></a>
      </div>
    </div>
  )
}

export default CommingSoonBottomNav