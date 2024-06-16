import React from 'react';

const MenuTable = ({tableData, title}) => {
    // const subs = subsData.subs.items;

    return (
        <div className="w-full mt-8 md:mt-12 p-4 pt-10 border border-black self-start">
            <div className="text-center text-lg md:text-2xl font-bold mb-8">
                {title}
            </div>
            <div className="grid grid-cols-4 text-center font-semibold mb-4">
                <div className='col-span-2'></div>
                <div>sm.</div>
                <div>lg.</div>
            </div>
            {tableData.map((entry, index) => (
                <div key={index} className="mb-4 pb-4 grid grid-cols-4 text-center justify-between">
                    <div className="col-span-2 text-xs md:text-sm font-semibold text-left pl-8">{entry.name}</div>
                    <div className="text-xs md:text-sm">{entry.price_sm}</div>
                    <div className="text-xs md:text-sm">{entry.price_lg}</div>
                </div>
            ))}
        </div>
    );
};

export default MenuTable;