import { useState } from "react";
import { FaPlus, FaBars, FaBell, FaUser, FaCloudUploadAlt, FaChartLine, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import "./css/styles.css";

const receipts = [
  { id: 1, date: "11.11.2025", title: "Title", amount: 50000, category: "Foodstuff" },
  { id: 2, date: "11.11.2025", title: "Title", amount: 10000, category: "Cafe" },
  { id: 3, date: "11.11.2025", title: "Title", amount: 50000, category: "Foodstuff" },
  { id: 4, date: "11.11.2025", title: "Title", amount: 10000, category: "Cafe" },
];

export default function ReceiptList({ onAddReceipt }) {
  const [filter, setFilter] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const uniqueCategories = [...new Set(receipts.map((receipt) => receipt.category))];

  const filteredReceipts = receipts.filter((receipt) => {
    if (filter === "All") return true;
    if (filter === "By price") return receipt.amount >= minPrice && receipt.amount <= maxPrice;
    if (filter === "By category" && selectedCategory) return receipt.category === selectedCategory;
    return true;
  });

  const closeSidebar = (e) => {
    if (!e.target.closest(".sidebar") && !e.target.closest(".menu-button")) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className="container" onClick={closeSidebar}>
      {/* Header */}
      <header className="header">
        <button className="menu-button" onClick={(e) => { e.stopPropagation(); setIsNavOpen(!isNavOpen); }}>
          <FaBars size={24} />
        </button>
        <h1 className="company-title">Practice</h1>
        <div className="header-icons">
          <FaBell size={24} className="icon" />
          <FaUser size={24} className="icon" />
        </div>
      </header>

      {/* Sidebar */}
      <nav className={`sidebar ${isNavOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className="sidebar-header">
          <FaUser className="user-icon" size={40} />
          <p className="user-name">User Userovich</p>
          <p className="user-email">user@gmail.com</p>
        </div>
        <ul className="sidebar-menu">
          <li><FaCloudUploadAlt /> Upload Receipts</li>
          <li><FaChartLine /> Statistics</li>
          <li><FaCog /> Settings</li>
        </ul>
        <button className="logout-button"><FaSignOutAlt /> Exit</button>
      </nav>

      <h2 className="title">My Receipt</h2>
      <p className="total">Total amount of receipts: {receipts.length}</p>

      <div className="filters-container">
        <div className="filters">
          <button onClick={() => setFilter("All")} className={`filter-button ${filter === "All" ? "active" : ""}`}>All</button>
          <button onClick={() => setFilter("By price")} className={`filter-button ${filter === "By price" ? "active" : ""}`}>By price</button>
          <button onClick={() => setFilter("By category")} className={`filter-button ${filter === "By category" ? "active" : ""}`}>By category</button>
        </div>
      </div>


      {filter === "By price" && (
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

      {filter === "By category" && (
        <div className="category-filter">
          <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory} className="category-select">
            <option value="">All categories</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      )}

      <div className="receipt-list">
        {filteredReceipts.map((receipt) => (
          <Card key={receipt.id} className={`receipt-card ${receipt.category === "Foodstuff" ? "food" : "cafe"}`}>
            <CardContent>
              <p className="date">{receipt.date}</p>
              <p className="receipt-title">{receipt.title}</p>
              <p className="amount">{receipt.amount}тг</p>
              <p className={`category ${receipt.category === "Foodstuff" ? "food" : "cafe"}`}>{receipt.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <button onClick={onAddReceipt} className="add-button">
        <FaPlus size={24} />
      </button>
    </div>
  );
}
