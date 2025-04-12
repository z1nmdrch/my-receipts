import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiBell, FiUser, FiPlus } from 'react-icons/fi';
import './css/Main.css';

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="main-container">
      <header className="header header-left-align">
        <div className="header-left">
          <button className="menu-button" onClick={handleMenuClick}>
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
        <h3 className="username">User Userovich`s</h3>
        <p className="date">Tue, March 21, 2025</p>
      </section>

      <section className="summary">
        <div className="summary-card">
          <h4>92</h4>
          <p>Total amount of receipts</p>
        </div>
        <div className="summary-card">
          <h4>125.000tg</h4>
          <p>The amount of money spent</p>
        </div>
      </section>

      <section className="filter-buttons filter-top">
        <button className="filter-button large">Last</button>
      </section>

      <section className="receipt-list">
        {/* First block with category foodstuff */}
        <div className="receipt-card">
          <div>
            <h4>Title</h4>
            <p className="amount">50.000тг</p>
          </div>
          <p className="details">Details</p>
          <div className="receipt-meta">
            <span className="category foodstuff">Foodstuff</span>
            <span className="date">11.11.2025</span>
          </div>
        </div>

        {/* Filters */}
        <section className="filter-buttons filter-bottom">
          <button className="filter-button large">Recent</button>
          <button className="filter-button large">All</button>
        </section>

        {/* More examples with different category classes */}
        <div className="receipt-card">
          <div>
            <h4>Title</h4>
            <p className="amount">50.000тг</p>
          </div>
          <p className="details">Details</p>
          <div className="receipt-meta">
            <span className="category cafe">Cafe</span>
            <span className="date">11.11.2025</span>
          </div>
        </div>
        
        <div className="receipt-card">
          <div>
            <h4>Title</h4>
            <p className="amount">50.000тг</p>
          </div>
          <p className="details">Details</p>
          <div className="receipt-meta">
            <span className="category cafe">Cafe</span>
            <span className="date">11.11.2025</span>
          </div>
        </div>

        <div className="receipt-card">
          <div>
            <h4>Title</h4>
            <p className="amount">50.000тг</p>
          </div>
          <p className="details">Details</p>
          <div className="receipt-meta">
            <span className="category clothes">Clothes</span>
            <span className="date">11.11.2025</span>
          </div>
        </div>
      </section>

      <button className="floating-button" aria-label="Add receipt">
        <FiPlus size={24} />
      </button>
    </div>
  );
}
