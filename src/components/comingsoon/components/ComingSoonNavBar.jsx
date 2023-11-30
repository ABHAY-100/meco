import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import "../components/ComingSoonNavBar.css";

const ComingSoonNavBar = () => {
  return (
    <nav>
      <div className="left">
        <a href="https://meco.vercel.app/">
          <img src="/meco-icon-blank.png" alt="meco logo" />
        </a>
      </div>

      <div className="right">
        <ul className="menu-long">
          <li className="navtext"><a href="">Contacts</a></li>
          <FaCircle className="dot" style={{ color: "#ffffff" }} />
          <li className="navtext"><a href="">About</a></li>
        </ul>

        {/* <div className="menu">
          <div className="menu_button">
            <FaBarsStaggered className='menubar' style={{ color: '#ffffff' }} />
          </div>
        </div> */}

        <div className="menu">
          <div className="menu_button">
          <label for="check">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ComingSoonNavBar;
