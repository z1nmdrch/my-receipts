export default function StatWidget({ title, data }) {
    return (
        <div className="stat-widget">
            <h5 className="stat-widget-header">{title}</h5>

            <h4 className="stat-widget-title">
                {data.Amount || data.Count}
                {data.Currency && <span>{data.Currency}</span>}
            </h4>

            <p className="stat-widget-description">
                {data.ItemName}
            </p>
        </div>
    );
}
