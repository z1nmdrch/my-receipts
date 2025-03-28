import { useState } from "react";
import Header from "../components/page_components/Header";
import Sidebar from "../components/page_components/SideBar";
import { Card, CardContent } from "../components/ui/card";
import AddReceipt from "../components/page_components/AddReceipt"; // Импортируем новый компонент
import "../css/styles.css";

const receipts = [
    { id: 1, date: "11.11.2025", title: "Title", amount: 50000, category: "Foodstuff" },
    { id: 2, date: "11.11.2025", title: "Title", amount: 10000, category: "Cafe" },
    { id: 3, date: "11.11.2025", title: "Title", amount: 50000, category: "Foodstuff" },
    { id: 4, date: "11.11.2025", title: "Title", amount: 10000, category: "Cafe" },
];

export default function MainPage() {
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

    return (
        <div className="container" onClick={() => setIsNavOpen(false)}>
            <Header title={"Home"} onMenuClick={(e) => { e.stopPropagation(); setIsNavOpen(!isNavOpen); }} />
            <Sidebar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

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

            {/* Добавленная кнопка для добавления чека */}
            <AddReceipt />
        </div>
    );
}
