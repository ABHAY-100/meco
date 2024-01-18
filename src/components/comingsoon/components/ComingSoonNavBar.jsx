import React from "react";
import { FaCircle } from "react-icons/fa";
import "../components/ComingSoonNavBar.css";

const ComingSoonNavBar = () => {
  return (
    <nav>
      <div className="left">
        <a href="https://meco.vercel.app/">
          <img src="/meco-icon-white.png" alt="meco_logo" />
        </a>
      </div>

      <div className="right">
        <ul className="menu-long">
          <li className="navtext">
            <a href="https://github.com/ABHAY-100/meco#contact">Contacts</a>
          </li>
          <FaCircle className="dot" style={{ color: "#ffffff" }} />
          <li className="navtext">
            <a href="https://github.com/ABHAY-100/meco#meco">About</a>
          </li>
        </ul>

        <div className="menu">
          <div className="menu_button">
            <label for="check">
              <input type="checkbox" id="check" />
              <span></span>
              <span></span>
              <span></span>
              <div className="toggle">
                <a href="https://github.com/ABHAY-100/meco#contact">Contacts</a>
                <a href="https://github.com/ABHAY-100/meco#meco">About</a>
              </div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ComingSoonNavBar;
