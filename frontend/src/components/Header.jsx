import React from 'react';

const LogoStyle = {
  'color': '#D90606',
  'font-family': 'Gloria Hallelujah',
  'font-weight': '400'
}

const HeaderBtnStyle = {
  'color': 'white'
}

const Header = ({shows}) => {

  function setPage(tabName) {
    for (var entry of shows) {
      if (entry[0] === tabName) {
        entry[1](true)
      } else {
        entry[1](false)
      }
    }
  }

  function scrollPage() {
    setPage("home")
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="w-full h-32 flex flex-none justify-content justify-between items-center bg-black px-10">
      <h1 className='text-5xl' style={{...LogoStyle}}>SEVENS</h1>
      <div className='space-x-12'>
        <button style={HeaderBtnStyle} onClick={() => setPage("home")}>Home</button>
        <button style={HeaderBtnStyle} onClick={() => setPage("menu")}>Menu</button>
        <button style={HeaderBtnStyle} onClick={scrollPage}>Contact</button>
        <button style={HeaderBtnStyle} onClick={() => setPage("reviews")}>Reviews</button>
      </div>
    </div>
  )
}

export default Header;
