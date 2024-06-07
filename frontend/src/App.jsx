import Header from './components/Header'
import TitleCard from './components/TitleCard'
import HomePage from './components/HomePage'
import Bottom from './components/Bottom'
import Menu from './components/Menu'

function App() {
  return (
    <div>
      {/* <div className='flex flex-col h-screen'>
        <Header />
        <TitleCard />
      </div> */}
      {/* <HomePage /> */}
      <Header />
      <Menu />
      <Bottom />
    </div>
  )
}

export default App
