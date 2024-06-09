import React, { useState, useEffect } from 'react';
import Data from '../data/menu.json'
import MenuTable from './MenuTable.jsx'
import '../css/Animations.css'

const Menu = () => {
    // const subs = subsData.subs.items;
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
      setFadeIn(true);
    }, []);

    return (
        <div>
            <div className={`hidden md:flex flex-row justify-evenly mb-12 ${fadeIn ? 'animate-fade-in' : ''}`}>
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
            <div className={`flex md:hidden flex-row justify-evenly mb-8 md:mb-12 ${fadeIn ? 'animate-fade-in' : ''}`}>
                <div className='w-full flex flex-col mx-4'>
                    {Data.map((section, index) => {
                        return (
                            <MenuTable key={index} tableData={section.items} name={section.title} />
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default Menu;
