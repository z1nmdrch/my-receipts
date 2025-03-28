import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SpendingTrends({data}) {
    return (
        <div className="stat-container">
            <h3 className="stat-title">Daily Spendings</h3>
            <ResponsiveContainer width={450} height={300} className="spendings-data">
                <BarChart data={data}>
                    <XAxis dataKey="date" stroke="#7B7F9E" />
                    <YAxis stroke="#7B7F9E" />
                    <Tooltip />
                    <Bar dataKey="spendings" fill="#4A3AFF" barSize={40} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
