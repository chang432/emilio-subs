import Header from './components/Header'
import TitleCard from './components/TitleCard'
import HomePage from './components/HomePage'
import Bottom from './components/Bottom'
import Menu from './components/Menu'
import { useState } from 'react'

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const shows = [["home",setShowHome], ["menu",setShowMenu], ["about",setShowAbout], ["reviews",setShowReviews]]

  return (
    <div>
      {showHome && <div className='flex flex-col h-screen'>
        <Header shows={shows} />
        <TitleCard />
      </div>}
      {showHome && <HomePage />}
      {!showHome && <Header shows={shows} />}
      {showMenu && <Menu />}
      <Bottom />
    </div>
  )
}

export default App
