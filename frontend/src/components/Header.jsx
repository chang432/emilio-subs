import React from 'react';

const LogoStyle = {
  'color': '#D90606',
  'font-family': 'Gloria Hallelujah',
  'font-weight': '400'
}

const HeaderBtnStyle = {
  'color': 'white'
}

const Header = () => {
  return (
    <div className="w-full h-32 flex flex-none justify-content justify-between items-center bg-black px-10">
      <h1 className='text-5xl' style={{...LogoStyle}}>Emilio's</h1>
      <div className='space-x-12'>
        <button style={HeaderBtnStyle}>Home</button>
        <button style={HeaderBtnStyle}>Menu</button>
        <button style={HeaderBtnStyle}>About</button>
        <button style={HeaderBtnStyle}>Reviews</button>
      </div>
    </div>
  )
}

export default Header;
