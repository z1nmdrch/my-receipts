import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function SpendingTrends({ data }) {
    return (
        <div className="stat-container">
            <h3 className="stat-title">Daily Spendings</h3>

            <div style={{ width: "100%", overflowX: "auto" }}>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" stroke="#7B7F9E" />
                        <YAxis stroke="#7B7F9E" />
                        <Tooltip />
                        <Bar dataKey="spendings" fill="#4A3AFF" barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
