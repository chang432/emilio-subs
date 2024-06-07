import React from 'react';
import Data from '../data/menu.json'
import MenuTable from './MenuTable.jsx'

const Menu = () => {
    // const subs = subsData.subs.items;

    return (
        <div className="flex flex-row justify-evenly mb-12">
            <div className='w-5/12 flex flex-col'>
                {Data.map((section, index) => {
                    if (index === 0) {
                        return (
                            <MenuTable key={index} tableData={section.items} name={section.title} />
                        )
                    } 
                })}
            </div>
            <div className='w-5/12 flex flex-col'>
                {Data.map((section, index) => {
                    if (index != 0) {
                        return (
                            <MenuTable key={index} tableData={section.items} name={section.title} />
                        )
                    } 
                })}
            </div>
        </div>
    );
};

export default Menu;
