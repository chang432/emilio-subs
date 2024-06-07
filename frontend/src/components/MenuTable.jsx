import React from 'react';

const MenuTable = ({tableData, name}) => {
    // const subs = subsData.subs.items;

    return (
        <div className="w-full mt-12 p-4 border border-black self-start">
            <div className="text-center text-2xl font-bold mb-4">
                {name}
            </div>
            {tableData.map((entry, index) => (
                <div key={index} className="mb-4 pb-4">
                    <div className="flex justify-between items-center">
                        <div className="text-sm font-semibold">{entry.name}</div>
                        <div className="text-sm">{entry.price}</div>
                    </div>
                    <div className="text-gray-600">
                        {entry.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuTable;
