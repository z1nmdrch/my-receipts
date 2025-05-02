import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import AddReceipt from "./AddReceipt";

export default function ScanNew() {
    const [openAddReceipt, setOpenAddReceipt] = useState(false);

    return (
        <div className="scan-new-wrapper">
            <div className="scan-new-body" onClick={() => setOpenAddReceipt(true)}>
                <p>Click!</p>
                <FaCamera size={80} className="scan-new-icon" />
            </div>

            {openAddReceipt && (
                <AddReceipt
                    open={openAddReceipt}
                    onClose={() => setOpenAddReceipt(false)}
                />
            )}
        </div>
    );
}
