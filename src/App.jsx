import './App.scss'
import DayForecast from './components/DayForecast/DayForecast'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  return (
    <main className='app'>
      <Header />
      <SearchBar />
      <DayForecast />
    </main>
  )
}

export default App
