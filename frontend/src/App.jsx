import Header from './components/Header'
import TitleCard from './components/TitleCard'
import NumberLocation from './components/NumberLocation'

function App() {
  return (
    <div>
      <div className='flex flex-col h-screen'>
        <Header />
        <TitleCard />
      </div>
      <div className='w-full h-16 bg-black'></div>
      <NumberLocation />
    </div>
  )
}

export default App
