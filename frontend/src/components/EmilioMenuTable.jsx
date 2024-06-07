// import React from 'react';
// import menuData from '../data/menu.json';

// const MenuTable = () => {
//     const subs = menuData[0]["Steak Subs"];

//     return (
//         <div className="w-7/12 p-4 border">
//             <div className="text-center text-2xl font-bold mb-4">
//                 Steak Subs
//             </div>
//             <div className="grid grid-cols-3 text-center font-semibold mb-2">
//                 <div></div>
//                 <div>sm.</div>
//                 <div>lg.</div>
//             </div>
//             {subs.map((sub, index) => {
//                 const [name, prices] = Object.entries(sub)[0];
//                 return (
//                     <div key={index} className="grid grid-cols-3 text-center mb-2">
//                         <div>{name}</div>
//                         <div>${prices.sm.toFixed(2)}</div>
//                         <div>${prices.lg.toFixed(2)}</div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default MenuTable;
