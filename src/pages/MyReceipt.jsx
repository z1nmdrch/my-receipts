import React, { useState, useMemo } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiBell, FiUser, FiPlus } from 'react-icons/fi';
import './css/Main.css';

const receipts = [
  { id: 1, title: 'Title', amount: 50000, date: '11.11.2025', category: 'foodstuff' },
  { id: 2, title: 'Title', amount: 30000, date: '11.11.2025', category: 'cafe' },
  { id: 3, title: 'Title', amount: 60000, date: '11.11.2025', category: 'clothes' },
  { id: 4, title: 'Title', amount: 20000, date: '11.11.2025', category: 'foodstuff' },
  { id: 5, title: 'Title', amount: 40000, date: '11.11.2025', category: 'cafe' },
];

export default function MyReceipt() {
  const [filter, setFilter] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const uniqueCategories = useMemo(
    () => [...new Set(receipts.map((r) => r.category))],
    []
  );

  const filteredReceipts = useMemo(() => {
    let result = [...receipts];

    if (filter === 'By price') {
      if (minPrice !== '') result = result.filter((r) => r.amount >= minPrice);
      if (maxPrice !== '') result = result.filter((r) => r.amount <= maxPrice);
    }

    if (filter === 'By category') {
      if (selectedCategory) {
        result = result.filter((r) => r.category === selectedCategory);
      }
    }

    return result;
  }, [filter, minPrice, maxPrice, selectedCategory]);

  return (
    <div className="main-container">
      <header className="header">
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
        <h3 className="username">My Receipt</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          <p className="date">Total amount of receipts <strong>{receipts.length}</strong></p>
          <p className="date">The amount of money spent <strong>{receipts.reduce((a, b) => a + b.amount, 0)}тг</strong></p>
        </div>
      </section>

      <div className="filters-container">
        <div className="filters">
          <button onClick={() => setFilter('All')} className={`filter-button ${filter === 'All' ? 'active' : ''}`}>All</button>
          <button onClick={() => setFilter('By price')} className={`filter-button ${filter === 'By price' ? 'active' : ''}`}>By price</button>
          <button onClick={() => setFilter('By category')} className={`filter-button ${filter === 'By category' ? 'active' : ''}`}>By category</button>
        </div>
      </div>

      {filter === 'By price' && (
        <div className="price-filter">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="Min price"
            className="price-input"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="Max price"
            className="price-input"
          />
        </div>
      )}

      {filter === 'By category' && (
        <div className="category-filter">
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="category-select"
          >
            <option value="">All categories</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      )}

      <div className="receipt-list">
        {filteredReceipts.map((receipt) => (
          <div key={receipt.id} className="receipt-card">
            <div>
              <h4>{receipt.title}</h4>
              <p className="amount">{receipt.amount.toLocaleString()}тг</p>
            </div>
            <p className="details">Details</p>
            <div className="receipt-meta">
              <span className={`category ${receipt.category}`}>{capitalize(receipt.category)}</span>
              <span className="date">{receipt.date}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="floating-button" aria-label="Add receipt">
        <FiPlus size={24} />
      </button>
    </div>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
