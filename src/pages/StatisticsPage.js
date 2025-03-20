import {FaBars, FaBell, FaUser} from "react-icons/fa";
import {BarChart} from "@mui/x-charts/BarChart";
import "../css/Stats.css";
import OptionButton from "../components/ui/OptionButton";
import {useState} from "react";
import {PieChart} from "@mui/x-charts";

export default function StatisticsPage() {

    const optionButtons = ["Common Purchases", "Somethings Else"]
    const [activeFilter, setActiveFilter] = useState(optionButtons[0]);

    return (
        <>
            <header className="header">
                <button className="menu-button" onClick={(e) => {
                    e.stopPropagation();
                    // setIsNavOpen(!isNavOpen);
                }}>
                    <FaBars size={24}/>
                </button>
                <h1 className="company-title">Statistics</h1>
                <div className="header-icons">
                    <FaBell size={24} className="icon"/>
                    <FaUser size={24} className="icon"/>
                </div>
            </header>

            <main>

                <div className="option-buttons-row">
                    {
                        optionButtons.map((button) =>
                            <OptionButton
                                isActive={ activeFilter === button }
                                onClick={() => setActiveFilter(button)}
                                button={button}
                            />)

                    }
                </div>

                <div className="stats-display">
                    {
                        activeFilter === optionButtons[0] ? <MyBarChart /> : <MyAnotherStat/>
                    }
                </div>

            </main>
        </>
    )
}

function MyBarChart() {
    return (
        <div style={{display: "flex", columnGap: "30px"}}>
            <BarChart
                colors={["#6004FF", "#8A5CFF", "#99C2FF"]}
                series={[{ data: [10, 21, 15], label: "Покупки %" }]}
                xAxis={[{ scaleType: "band", data: ["Сигареты", "Пиво", "Хлеб"] }]}
                width={400}
                height={400}
            />
            <BarChart
                series={[{ data: [10, 21, 15], label: "Покупки %" }]}
                xAxis={[{ scaleType: "band", data: ["Сигареты", "Пиво", "Хлеб"] }]}
                width={400}
                height={400}
            />
        </div>
    )
}

function MyAnotherStat() {
    return (
        <div style={{display: "flex", columnGap: "50px"}}>
            <PieChart
                colors={["#6004FF", "#8A5CFF", "#99C2FF"]}
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: "Хлеб" },
                            { id: 1, value: 15, label: "Водка" },
                            { id: 2, value: 20, label: "Кола" },
                        ],
                    },
                ]}
                width={400}
                height={400}
            />
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: "Хлеб" },
                            { id: 1, value: 15, label: "Вода" },
                            { id: 2, value: 20, label: "Что?" },
                        ],
                    },
                ]}
                width={400}
                height={400}
            />
        </div>
    )
}