import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function PriceComparisonStat({data}) {
    return (
        <div className="stat-container">
            <h3 className="stat-title">Price Comparison</h3>
            <ResponsiveContainer width={400} height={300}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                    <XAxis dataKey="date" stroke="#7B7F9E" />
                    <YAxis stroke="#7B7F9E" />
                    <Tooltip />
                    <Legend iconType="circle" />
                    <Line type="monotone" dataKey="Magnum" stroke="#4A3AFF" strokeWidth={3} dot={{ r: 5 }} />
                    <Line type="monotone" dataKey="Small" stroke="#93AAFD" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
