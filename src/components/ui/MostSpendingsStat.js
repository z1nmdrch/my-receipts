import { PieChart, Pie, Cell, Tooltip } from "recharts";
import React from "react";


const COLORS = ["#4A3AFF", "#2D5BFF", "#93AAFD", "#C6D2FD"];

const CustomLegend = ({ data, colors }) => (
    <div className="legend">
        {data.map((entry, index) => (
            <div key={index} className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: colors[index] }}></span>
                <span className="legend-text">{entry.name}</span>
                <span className="legend-value">{entry.value.toFixed(2)}%</span>
            </div>
        ))}
    </div>
);

export default function MostSpendingsStat({data}) {
    return (
        <div className="stat-container">
            <h3 className="stat-title">Popular Categories</h3>
            <div className="chart-content">
                <PieChart width={200} height={200}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        labelLine={false}
                    >
                        {data.map((_, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <CustomLegend data={data} colors={COLORS} />
            </div>
        </div>
    );
}
