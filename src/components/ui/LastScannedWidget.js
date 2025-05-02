export default function LastScannedWidget({data}) {
    return(
        <>
            <div className="last-scanned-card">
                <h3>🧾 Last scanned receipt</h3>
                <p><strong>Store:</strong> {data.storeName}</p>
                <p><strong>Date:</strong> {data.date}</p>
                <p><strong>Total:</strong> {data.total}</p>
                <ul>
                    {data.items.map((item, index) => (
                        <li key={index}>
                            {item.name} — {item.price}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
