import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import '../components/ComingSoonBottomNav.css'

const ComingSoonBottomNav = () => {
  const handleSupportButtonClick = () => {
    const emailAddress = 'meco.apppp@gmail.com';
    const subject = 'Expression of Interest in Contributing';
    const body = encodeURIComponent(`
    Kindly provide the following details in your response:
    1. Could you articulate the motivation behind your interest in contributing to the meco community?
    2. Share highlights of your past experiences that you believe are relevant to this opportunity.
    3. What specific skills or qualities do you possess that you feel align with the ethos of meco.app?
    4. How do you envisage your contribution shaping the overarching narrative of meco?
    5. Please provide your professional portfolio and resume for our review.

    Additionally, try to include as much of the requested data as possible. If certain information is not available, feel free to inform us of your current status or any relevant details.
    `);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bottomNav">
      <div className="left" onClick={handleSupportButtonClick}>
        <p>Contribute Now</p>
        <a href="#"><span class="arrow right"></span></a>
      </div>
      
      <div className="right">
        <a href="https://www.threads.net/@meco.app" target='blank'><FaThreads className="threads icon" style={{ color: '#ffffff' }} /></a>
        <a href="https://www.instagram.com/meco.app/" target='blank'><FaInstagram className='insta icon' style={{ color: '#ffffff' }} /></a>
      </div>
    </div>
  )
}

export default ComingSoonBottomNav