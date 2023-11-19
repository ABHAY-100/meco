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
        <FaThreads className="threads" style={{ color: '#ffffff' }} />
        <FaInstagram className='insta' style={{ color: '#ffffff' }} />
      </div>
    </div>
  )
}

export default CommingSoonBottomNav