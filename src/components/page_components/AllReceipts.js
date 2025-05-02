import { useState } from "react";

const RECEIPTS_PER_PAGE = 5;

export default function AllReceipts({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");

    const filteredReceipts = data.filter((receipt) =>
        receipt.storeName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedReceipts = filteredReceipts.sort((a, b) =>
        sortOrder === "desc"
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date)
    );

    const totalPages = Math.ceil(sortedReceipts.length / RECEIPTS_PER_PAGE);
    const startIndex = (currentPage - 1) * RECEIPTS_PER_PAGE;
    const currentReceipts = sortedReceipts.slice(startIndex, startIndex + RECEIPTS_PER_PAGE);

    function handleNext() {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }

    function handlePrev() {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    }

    return (
        <div className="all-receipts">
            <div className="receipts-filters">
                <input
                    id="search-receipts"
                    type="text"
                    placeholder="Search by store name"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                    }}
                />
            </div>

            <div className="receipts-list">
                {currentReceipts.map((receipt) => (
                    <div key={receipt.id} className="receipt-card">
                        <span className="receipt-date">{receipt.date}</span>
                        <span className="receipt-total">{receipt.total}</span>
                        <div className="receipt-store">{receipt.storeName}</div>
                        <div className="receipt-items-count">{receipt.items.length} items</div>
                    </div>
                ))}
            </div>

            <div className="pagination-controls">
                <button onClick={handlePrev} disabled={currentPage === 1}>
                    Prev
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}
