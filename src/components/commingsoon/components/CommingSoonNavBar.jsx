import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { FaBarsStaggered } from "react-icons/fa6";
import '../components/CommingSoonNavBar.css';

const CommingSoonNavBar = () => {
  return (
    <nav>
      <div className="left">
        <a href="https://meco.vercel.app/"><img src="/meco-icon-blank.png" alt="meco logo" /></a>
      </div>
      <div className="right">
        <ul className='menu-long'>
          <li className='navtext'>Contacts</li>
            <FaCircle className='dot' style={{ color: '#ffffff' }} />
          <li className='navtext'>About</li>
        </ul>
        <div class="menu">
          <div class="menu_button">
            <FaBarsStaggered className='menubar' style={{ color: '#ffffff' }} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CommingSoonNavBar;
