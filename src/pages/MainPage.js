import { useState } from "react";
import Header from "../components/page_components/Header";
import Sidebar from "../components/page_components/SideBar";
import "../css/styles.css";
import ScanNew from "../components/page_components/ScanNew";
import AllReceipts from "../components/page_components/AllReceipts";
import MainPageFilter from "../components/page_components/MainPageFilter";
import {useCookies} from "react-cookie";
import LastScannedWidget from "../components/ui/LastScannedWidget";

export default function MainPage() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const mainPageFilters = ["Scan New", "All Receipts"];
    const [activeFilter, setActiveFilter] = useState(mainPageFilters[0]);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const username = cookies.user?.username || "Name!";

    const [fadeOut, setFadeOut] = useState(false);

    const handleFilterClick = (filter) => {
        if (filter === activeFilter) return;
        setFadeOut(true);
        setTimeout(() => {
            setActiveFilter(filter);
            setFadeOut(false);
        }, 300);
    };


    const lastScannedData = {
        storeName: "Magnum",
        date: "07-12-2024",
        total: "2060₸",
        items: [
            { name: "Coca Cola 2l", price: "750₸" },
            { name: "Lays Chips 150g", price: "890₸" },
            { name: "Snickers Bar", price: "420₸" }
        ]
    };

    const allReceiptsData = [
        {
            id: 1,
            storeName: "SmallMart",
            date: "01-04-2025",
            total: "3750₸",
            items: [
                { name: "Milk 1L", price: "450₸" },
                { name: "Bread", price: "300₸" },
                { name: "Eggs 10pcs", price: "1000₸" },
                { name: "Tomatoes 1kg", price: "2000₸" },
            ]
        },
        {
            id: 2,
            storeName: "Magnum",
            date: "03-04-2025",
            total: "2640₸",
            items: [
                { name: "Fanta 1.5L", price: "500₸" },
                { name: "Cookies", price: "640₸" },
                { name: "Chips", price: "1500₸" },
            ]
        },
        {
            id: 3,
            storeName: "GreenMarket",
            date: "05-04-2025",
            total: "5450₸",
            items: [
                { name: "Bananas 2kg", price: "1600₸" },
                { name: "Cucumber", price: "750₸" },
                { name: "Orange Juice", price: "1800₸" },
                { name: "Honey", price: "1300₸" },
            ]
        },
        {
            id: 4,
            storeName: "FixPrice",
            date: "08-04-2025",
            total: "1800₸",
            items: [
                { name: "Toothpaste", price: "600₸" },
                { name: "Toilet Paper", price: "700₸" },
                { name: "Sponge Pack", price: "500₸" },
            ]
        },
        {
            id: 5,
            storeName: "TechnoDom",
            date: "10-04-2025",
            total: "135000₸",
            items: [
                { name: "Wireless Headphones", price: "45000₸" },
                { name: "Bluetooth Speaker", price: "30000₸" },
                { name: "Power Bank", price: "60000₸" },
            ]
        },
        {
            id: 6,
            storeName: "PharmaPlus",
            date: "13-04-2025",
            total: "1220₸",
            items: [
                { name: "Vitamin C", price: "700₸" },
                { name: "Hand Sanitizer", price: "520₸" },
            ]
        },
        {
            id: 7,
            storeName: "Magnum",
            date: "20-04-2025",
            total: "4790₸",
            items: [
                { name: "Tea Pack", price: "1400₸" },
                { name: "Sugar 1kg", price: "750₸" },
                { name: "Flour 2kg", price: "1100₸" },
                { name: "Oil 1L", price: "1540₸" },
            ]
        },
        {
            id: 8,
            storeName: "Books&More",
            date: "25-04-2025",
            total: "9400₸",
            items: [
                { name: "Notebook", price: "1500₸" },
                { name: "Pen Set", price: "600₸" },
                { name: "Book: Atomic Habits", price: "7300₸" },
            ]
        },
    ];


    return (
        <>
            <header>
                <Header title={"home"} onMenuClick={(e) => {
                    e.stopPropagation();
                    setIsNavOpen(!isNavOpen);
                }}/>
                <Sidebar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)}/>
            </header>

            <div className="container">
                <main id="main-page-main">
                    <div className="main-page-main-content">
                        <h2 className="greeting-text">👋  Welcome back, {username}</h2>
                        <div className="main-page-filter-row">
                            {mainPageFilters.map((filter) => (
                                <MainPageFilter
                                    isActive={activeFilter === filter}
                                    title={filter}
                                    onClick={() => handleFilterClick(filter)}
                                />
                            ))}
                        </div>
                        {
                            <div className={`fade-container ${fadeOut ? "fade-out" : "fade-in"}`}>
                                {activeFilter === "Scan New" ? <ScanNew/> : <AllReceipts data={allReceiptsData}/>}
                            </div>

                        }
                    </div>
                </main>
            </div>

        </>
    );
}
