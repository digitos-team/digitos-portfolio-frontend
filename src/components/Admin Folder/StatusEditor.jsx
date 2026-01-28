import React, { useState } from 'react';

const StatusEditor = ({ initialStatus, onSave }) => {
    const [status, setStatus] = useState(initialStatus || "Pending");

    const handleSave = (e) => {
        if (e) e.stopPropagation();
        onSave(status);
    };

    return (
        <div className="flex items-center gap-2 w-full mt-2" onClick={(e) => e.stopPropagation()}>
            <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSave();
                    }
                }}
                placeholder="Set Status"
                className="text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 outline-none focus:border-accent flex-1 transition-all bg-gray-50/50"
            />
            <button
                onClick={handleSave}
                className="text-[10px] bg-primary text-white px-3 py-1.5 rounded-lg font-bold hover:bg-primary/90 transition-colors uppercase tracking-wider whitespace-nowrap"
            >
                Save
            </button>
        </div>
    );
};

export default StatusEditor;
