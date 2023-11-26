import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import './CommingSoonBottomNav.css'



const CommingSoonBottomNav = () => {
  const handleSupportButtonClick = () => {
    const emailAddress = 'meco.apppp@gmail.com';
    const subject = 'Support Development';
    const body = encodeURIComponent(`
      In what ways do you envision contributing to MECO, and how do your skills and experiences align with the objectives and values of the organization?

      Note: Please delete this text in the body before sending.
    `);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bottomNav">
      <div className="left" onClick={handleSupportButtonClick}>
        <p>Support Development</p>
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