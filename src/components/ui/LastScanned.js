export default function LastScannedCard({ data}) {
    return (
        <>
            <h2 className="last-scanned-title">
                Last Scanned Receipt
            </h2>
            <div className="last-scanned-card">
                <div className="last-scanned-header">
                    <h3>{data.storeName}</h3>
                    <span className="last-scanned-date">{data.date}</span>
                </div>
                <div className="last-scanned-body">
                    <ul className="last-scanned-items">
                        {data.items.map((item, index) => (
                            <li key={index} className="last-scanned-item">
                                <span className="last-scanned-item-name">{item.name}</span>
                                <span className={"last-scanned-item-price"}>{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="last-scanned-total">
                    <span>Total:</span>
                    <span className={"last-scanned-total-price"}>{data.total}</span>
                </div>
            </div>
        </>
    );
}
