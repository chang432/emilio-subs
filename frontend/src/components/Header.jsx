import React, { useState, useEffect } from 'react';

const LogoStyle = {
  'color': '#D90606',
  'font-family': 'Gloria Hallelujah',
  'font-weight': '400'
}

const SevensLogoStyle = {
  'color': '#D90606',
  'font-family': "Goldman",
  'font-weight': '700',
  'font-style': 'normal',
  'letter-spacing': '0.3rem'
}

const Header = ({highlights, tabClicked, headerTabHovered, headerTabUnhovered}) => {

  const TabHomeStyle = {
    'color': highlights[0] ? '#D90606' : 'white'
  }

  const TabMenuStyle = {
    'color': highlights[1] ? '#D90606' : 'white'
  }
  
  const TabContactStyle = {
    'color': highlights[2] ? '#D90606' : 'white'
  }
  
  const TabReviewsStyle = {
    'color': highlights[3] ? '#D90606' : 'white'
  }

  return (
    <div className="w-full h-24 md:h-32 flex flex-none justify-content justify-between items-center bg-black px-4 md:px-10">
      <h1 className='text-3xl md:text-5xl' style={{...SevensLogoStyle}}>SEVENS</h1>
      <div className='space-x-4 md:space-x-12'>
        <button className='text-xs md:text-lg' style={TabHomeStyle} onClick={() => tabClicked('home')} onMouseEnter={() => headerTabHovered('home')} onMouseLeave={() => headerTabUnhovered('home')}>Home</button>
        <button className='text-xs md:text-lg' style={TabMenuStyle} onClick={() => tabClicked('menu')} onMouseEnter={() => headerTabHovered('menu')} onMouseLeave={() => headerTabUnhovered('menu')}>Menu</button>
        <button className='text-xs md:text-lg' style={TabContactStyle} onClick={() => tabClicked('contact')} onMouseEnter={() => headerTabHovered('contact')} onMouseLeave={() => headerTabUnhovered('contact')}>Contact</button>
        <button className='text-xs md:text-lg' style={TabReviewsStyle} onClick={() => tabClicked('reviews')} onMouseEnter={() => headerTabHovered('reviews')} onMouseLeave={() => headerTabUnhovered('reviews')}>Reviews</button>
      </div>
    </div>
  )
}

export default Header;
