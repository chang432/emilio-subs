import Header from './components/Header'
import TitleCard from './components/TitleCard'
import HomePage from './components/HomePage'
import Bottom from './components/Bottom'
import Menu from './components/Menu'
import ReviewPage from './components/ReviewPage'
import { useState, useEffect } from 'react'

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const shows = [["home",setShowHome], ["menu",setShowMenu], ["reviews",setShowReviews]]

  const [highlightHome, setHighlightHome] = useState(true);
  const [highlightMenu, setHighlightMenu] = useState(false);
  const [highlightContact, setHighlightContact] = useState(false);
  const [highlightReviews, setHighlightReviews] = useState(false);
  const [currentHighlightTab, setCurrentHighlightTab] = useState('home');
  const allTabHighlights = [['home', setHighlightHome], ['menu', setHighlightMenu], ['contact', setHighlightContact], ['reviews', setHighlightReviews]];
  const highlights = [highlightHome, highlightMenu, highlightContact, highlightReviews]

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
      top: parseInt(document.getElementById('HeaderTitleCardDiv').offsetHeight, 10),
      left: 0,
      behavior: 'smooth',
    });
  }

  function displayMenu() {
    setHighlightHome(false)
    setHighlightMenu(true)
    setCurrentHighlightTab('menu')
    setShowHome(false)
    setShowMenu(true)
    window.scrollTo(0, 0)
}

  function tabClicked(tabName) {

    if (tabName === "contact") {
      setCurrentHighlightTab('home')
      setHighlightHome(true)
      setHighlightMenu(false)
      setHighlightContact(false)
      setHighlightReviews(false)
      scrollPage()
      return
    }

    setCurrentHighlightTab(tabName)

    for (var tab of allTabHighlights) {
      if (tab[0] === tabName) {
        tab[1](true)
      } else {
        tab[1](false)
      }
    }

    setPage(tabName)
  }

  const headerTabHovered = (tabName) => {
    if (tabName != currentHighlightTab) {
      for (var tab of allTabHighlights) {
        if (tab[0] == tabName) {
          tab[1](true)
        } 
      }
    }
  }

  const headerTabUnhovered = (tabName) => {
    if (tabName != currentHighlightTab) {
      for (var tab of allTabHighlights) {
        if (tab[0] == tabName) {
          tab[1](false)
        } 
      }
    }
  }

  const HeaderTitleCardStyle = {
    'height': 'calc(var(--vh, 1vh) * 100)'
  }

  // fix mobile viewport height problem
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        let vh = window.innerHeight * 0.01
        // console.log("resizing, new full height: ", vh*100)
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div>
      {showHome && <div id='HeaderTitleCardDiv' className='flex flex-col' style={HeaderTitleCardStyle}>
        <Header highlights={highlights} tabClicked={tabClicked} headerTabHovered={headerTabHovered} headerTabUnhovered={headerTabUnhovered} />
        <TitleCard />
      </div>}
      {showHome && <HomePage displayMenu={displayMenu} />}
      {!showHome && <Header highlights={highlights} tabClicked={tabClicked} headerTabHovered={headerTabHovered} headerTabUnhovered={headerTabUnhovered} />}
      {showMenu && <Menu />}
      {showReviews && <ReviewPage />}
      <Bottom />
    </div>
  )
}

export default App
