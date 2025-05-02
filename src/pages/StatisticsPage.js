import "../css/Stats.css";
import React, { useEffect, useState } from "react";
import StatWidget from "../components/ui/StatWidget";
import StatsFilter from "../components/ui/StatsFilter";
import MostSpendingsStat from "../components/ui/MostSpendingsStat";
import PriceComparisonStat from "../components/ui/PriceComparisonStat";
import SpendingTrends from "../components/ui/SpendingTrends";
import AverageSpendings from "../components/ui/AverageSpendings";
import Header from "../components/page_components/Header";
import Sidebar from "../components/page_components/SideBar";
import "../css/styles.css";

export default function StatisticsPage() {
    const filters = ["Daily", "Weekly", "Monthly", "Yearly"];
    const [activeFilter, setActiveFilter] = useState(filters[0]);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [loadData, setLoadData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:8080/getStats", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (response.ok) {
                setLoadData(await response.json());
            } else {
                const errorMessage = await response.json();
                alert(errorMessage);
            }
        } catch (e) {
            console.error("Ошибка при загрузке данных:", e);
        }
    };

    // Эти данные пока что заглушки, заменишь на loadData когда данные с сервера будут готовы
    const WidgetsData = {
        Daily: {
            "Overall Spent": { Amount: 2130, Currency: "₸" },
            "Most Spent On": { ItemName: "Coca Cola 2L", Amount: 750, Currency: "₸" },
            "Biggest Purchase": { ItemName: "Chicken Nuggets", Amount: 1500, Currency: "₸" },
            "Smallest Purchase": { ItemName: "Chewing Gum", Amount: 100, Currency: "₸" },
            "Total Transactions": { Count: 7 }
        },
        Weekly: {
            "Overall Spent": { Amount: 12650, Currency: "₸" },
            "Most Spent On": { ItemName: "Pizza", Amount: 3200, Currency: "₸" },
            "Biggest Purchase": { ItemName: "Headphones", Amount: 7000, Currency: "₸" },
            "Smallest Purchase": { ItemName: "Matchbox", Amount: 200, Currency: "₸" },
            "Total Transactions": { Count: 22 }
        },
        Monthly: {
            "Overall Spent": { Amount: 54200, Currency: "₸" },
            "Most Spent On": { ItemName: "Supermarket Groceries", Amount: 13500, Currency: "₸" },
            "Biggest Purchase": { ItemName: "Sneakers", Amount: 22000, Currency: "₸" },
            "Smallest Purchase": { ItemName: "Coffee Stick", Amount: 150, Currency: "₸" },
            "Total Transactions": { Count: 87 }
        },
        Yearly: {
            "Overall Spent": { Amount: 640000, Currency: "₸" },
            "Most Spent On": { ItemName: "Flight Tickets", Amount: 150000, Currency: "₸" },
            "Biggest Purchase": { ItemName: "Laptop", Amount: 450000, Currency: "₸" },
            "Smallest Purchase": { ItemName: "Plastic Spoon", Amount: 50, Currency: "₸" },
            "Total Transactions": { Count: 1024 }
        }
    };

    const MostSpendingsData = {
        Daily: [
            { name: "Foodstuff", value: 10.23 },
            { name: "Cafe", value: 5.15 },
            { name: "Gift", value: 2.5 },
            { name: "Clothes", value: 1.8 },
        ],
        Weekly: [
            { name: "Foodstuff", value: 78.43 },
            { name: "Cafe", value: 55.12 },
            { name: "Gift", value: 40.9 },
            { name: "Clothes", value: 15.3 },
        ],
        Monthly: [
            { name: "Foodstuff", value: 320.89 },
            { name: "Cafe", value: 250.21 },
            { name: "Gift", value: 190.56 },
            { name: "Clothes", value: 65.4 },
        ],
        Yearly: [
            { name: "Foodstuff", value: 3870.12 },
            { name: "Cafe", value: 2950.75 },
            { name: "Gift", value: 2310.43 },
            { name: "Clothes", value: 780.9 },
        ],
    };

    const PriceComparisonData = {
        Daily: [
            { date: "01.03", Magnum: 130, Small: 120 },
            { date: "02.03", Magnum: 135, Small: 125 },
            { date: "03.03", Magnum: 140, Small: 130 },
        ],
        Weekly: [
            { date: "Week 1", Magnum: 900, Small: 850 },
            { date: "Week 2", Magnum: 950, Small: 880 },
            { date: "Week 3", Magnum: 1020, Small: 970 },
        ],
        Monthly: [
            { date: "Jan", Magnum: 3800, Small: 3600 },
            { date: "Feb", Magnum: 4000, Small: 3900 },
            { date: "Mar", Magnum: 4200, Small: 4100 },
        ],
        Yearly: [
            { date: "2021", Magnum: 45000, Small: 43000 },
            { date: "2022", Magnum: 47000, Small: 45000 },
            { date: "2023", Magnum: 49000, Small: 47000 },
        ],
    };

    const TotalSpendingsData = {
        Daily: [
            { date: "01.03", spendings: 150 },
            { date: "02.03", spendings: 300 },
            { date: "03.03", spendings: 100 },
            { date: "04.03", spendings: 250 },
            { date: "05.03", spendings: 400 },
        ],
        Weekly: [
            { date: "Week 1", spendings: 1200 },
            { date: "Week 2", spendings: 1600 },
            { date: "Week 3", spendings: 1400 },
        ],
        Monthly: [
            { date: "Jan", spendings: 5200 },
            { date: "Feb", spendings: 4800 },
            { date: "Mar", spendings: 5600 },
        ],
        Yearly: [
            { date: "2021", spendings: 62000 },
            { date: "2022", spendings: 59000 },
            { date: "2023", spendings: 65000 },
        ],
    };

    const AvgCheckData = {
        Daily: [
            { category: "Food", avgCheck: 7.5 },
            { category: "Cafe", avgCheck: 12 },
            { category: "Clothes", avgCheck: 65 },
            { category: "Electronics", avgCheck: 150 },
            { category: "Gifts", avgCheck: 30 },
        ],
        Weekly: [
            { category: "Food", avgCheck: 50 },
            { category: "Cafe", avgCheck: 80 },
            { category: "Clothes", avgCheck: 200 },
            { category: "Electronics", avgCheck: 600 },
            { category: "Gifts", avgCheck: 150 },
        ],
        Monthly: [
            { category: "Food", avgCheck: 210 },
            { category: "Cafe", avgCheck: 350 },
            { category: "Clothes", avgCheck: 900 },
            { category: "Electronics", avgCheck: 2000 },
            { category: "Gifts", avgCheck: 700 },
        ],
        Yearly: [
            { category: "Food", avgCheck: 2500 },
            { category: "Cafe", avgCheck: 4500 },
            { category: "Clothes", avgCheck: 8000 },
            { category: "Electronics", avgCheck: 15000 },
            { category: "Gifts", avgCheck: 5000 },
        ],
    };

    return (
        <>
            <Header title={"stats"} onMenuClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(!isNavOpen);
            }} />
            <Sidebar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

            <main>
                <div className="main-container">
                    <div className="filtering-stats">
                        Set Period:
                        <ul className="filtering-stats-list">
                            {filters.map((filter, index) => (
                                <li key={index} className="filter-stats-button">
                                    <StatsFilter
                                        isActive={activeFilter === filter}
                                        onClick={() => setActiveFilter(filter)}
                                        filter={filter}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h3 className="overall-title">Overall</h3>

                    <div className="widget-row">
                        {Object.entries(WidgetsData[activeFilter]).map(([title, widget], index) => (
                            <StatWidget key={index} title={title} data={widget} />
                        ))}
                    </div>

                    <h3 className="overall-title overall-title-analysis">Analysis</h3>

                    <div className="stats-section">
                        <div className="stats-display stats-row-1">
                            <MostSpendingsStat data={MostSpendingsData[activeFilter]} />
                            <PriceComparisonStat data={PriceComparisonData[activeFilter]} />
                        </div>

                        <div className="stats-display stats-row-2">
                            <SpendingTrends data={TotalSpendingsData[activeFilter]} />
                            <AverageSpendings data={AvgCheckData[activeFilter]} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
