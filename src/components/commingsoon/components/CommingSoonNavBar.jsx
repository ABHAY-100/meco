import React from 'react'
import '../components/CommingSoonNavBar.css'

const CommingSoonNavBar = () => {
  return (
    <nav>
      <div className="left">
        <img src="public\meco-icon-blank.png" alt="" />
      </div>
      <div className="right">
        <ul>
          <li className='navtext'>Contacts</li>
          <li className='dot'><img src="/circle-solid.svg" alt="" /></li>
          <li className='navtext'>About</li>
        </ul>
      </div>
    </nav>
  )
}

export default CommingSoonNavBar