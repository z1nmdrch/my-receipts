import React from 'react';
import './css/MainWith0.css';
import { FiPlus, FiBell, FiUser } from 'react-icons/fi';
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function MainWith0() {
  return (
<div className="main-container">
      <header className="header header-left-align">
        <div className="header-left">
          <button className="menu-button">
            <FaBars size={24} />
          </button>
          <h2 className="title">Practice</h2>
        </div>
        <div className="header-icons">
          <FiBell size={20} />
          <FiUser size={20} />
        </div>
      </header>

      <section className="user-info">
        <h3>User Userovich`s</h3>
        <p>Tue, March 21, 2025</p>
      </section>

      <section className="summary">
        <div className="summary-card">
          <p>Total amount of receipts</p>
          <h4>0</h4>
        </div>
        <div className="summary-card">
          <p>The amount of money spent</p>
          <h4>0.00tg</h4>
        </div>
      </section>

      <section className="empty-state">
        <div className="upload-box">
          <p>While there are no receipts, upload!!!</p>
          <button className="upload-button">
            <FiPlus size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}
