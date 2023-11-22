import React from 'react';
import { FaCircle } from 'react-icons/fa';
import '../components/CommingSoonNavBar.css';

const CommingSoonNavBar = () => {
  return (
    <nav>
      <div className="left">
        <a href="https://meco.vercel.app/"><img src="/meco-icon-blank.png" alt="meco logo" /></a>
      </div>
      <div className="right">
        <ul>
          <li className='navtext'>Contacts</li>
          <FaCircle className='dot' style={{ color: '#ffffff' }} />
          <li className='navtext'>About</li>
        </ul>
      </div>
    </nav>
  );
}

export default CommingSoonNavBar;
