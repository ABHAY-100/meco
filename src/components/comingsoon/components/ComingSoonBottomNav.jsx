import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import '../components/ComingSoonBottomNav.css'



const ComingSoonBottomNav = () => {
  const handleSupportButtonClick = () => {
    const emailAddress = 'meco.apppp@gmail.com';
    const subject = 'Expression of Interest in Contributing';
    const body = encodeURIComponent(`
    Kindly provide the following details in your response:
    1. Could you articulate the motivation behind your interest in contributing to the MECO community?
    2. Share highlights of your past experiences that you believe are relevant to this opportunity.
    3. What specific skills or qualities do you possess that you feel align with the ethos of MECO.app?
    4. How do you envisage your contribution shaping the overarching narrative of MECO?
    5. Please provide your professional portfolio and resume for our review.
    `);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bottomNav">
      <div className="left" onClick={handleSupportButtonClick}>
        <p>Contribute Now</p>
        <FaArrowRight className="arrow" style={{ color: '#ffffff' }} />
      </div>
      
      <div className="right">
        <a href="https://www.threads.net/@meco.app" target='blank'><FaThreads className="threads" style={{ color: '#ffffff' }} /></a>
        <a href="https://www.instagram.com/meco.app/" target='blank'><FaInstagram className='insta' style={{ color: '#ffffff' }} /></a>
      </div>
    </div>
  )
}

export default ComingSoonBottomNav